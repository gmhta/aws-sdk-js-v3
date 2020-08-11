import { HashConstructor } from "@aws-sdk/types";

import { receiveMessageMiddleware } from "./receive-message";

describe("receiveMessageMiddleware", () => {
  const mockHashUpdate = jest.fn();
  const mockHashDigest = jest.fn().mockReturnValue(new Uint8Array(1));
  const MockHash: HashConstructor = class {} as any;
  MockHash.prototype.update = mockHashUpdate;
  MockHash.prototype.digest = mockHashDigest;

  beforeEach(() => {
    mockHashUpdate.mockClear();
    mockHashDigest.mockClear();
  });

  it("should do nothing if the checksums match", async () => {
    const next = jest.fn().mockReturnValue({
      output: {
        Messages: [
          { Body: "foo", MD5OfBody: "00", MessageId: "fooMessage" },
          { Body: "bar", MD5OfBody: "00", MessageId: "barMessage" },
        ],
      },
    });
    const handler = receiveMessageMiddleware({
      md5: MockHash,
    })(next, {} as any);

    await handler({ input: {} });

    expect(mockHashUpdate.mock.calls.length).toBe(2);
    expect(mockHashDigest.mock.calls.length).toBe(2);
  });

  it("should throw if the checksum does not match", async () => {
    const next = jest.fn().mockReturnValue({
      output: {
        Messages: [
          { Body: "foo", MD5OfBody: "00", MessageId: "fooMessage" },
          { Body: "bar", MD5OfBody: "1", MessageId: "barMessage" },
        ],
      },
    });
    const handler = receiveMessageMiddleware({
      md5: MockHash,
    })(next, {} as any);

    await expect(handler({ input: {} })).rejects.toThrow(new Error("Invalid MD5 checksum on messages: barMessage"));
    expect(mockHashUpdate.mock.calls.length).toBe(2);
    expect(mockHashDigest.mock.calls.length).toBe(2);
  });
});
