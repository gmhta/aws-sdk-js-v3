
import { OpsWorksClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OpsWorksClient.ts";
import { DescribeOperatingSystemsResponse } from "../models/index.ts";
import {
  deserializeAws_json1_1DescribeOperatingSystemsCommand,
  serializeAws_json1_1DescribeOperatingSystemsCommand,
} from "../protocols/Aws_json1_1.ts";
import { getSerdePlugin } from "../../middleware-serde/mod.ts";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "../../protocol-http/mod.ts";
import { Command as $Command } from "../../smithy-client/mod.ts";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  SerdeContext as __SerdeContext,
} from "../../types/mod.ts";

export type DescribeOperatingSystemsCommandInput = {};
export type DescribeOperatingSystemsCommandOutput = DescribeOperatingSystemsResponse & __MetadataBearer;

export class DescribeOperatingSystemsCommand extends $Command<
  DescribeOperatingSystemsCommandInput,
  DescribeOperatingSystemsCommandOutput,
  OpsWorksClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeOperatingSystemsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: OpsWorksClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeOperatingSystemsCommandInput, DescribeOperatingSystemsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      inputFilterSensitiveLog: (input: any) => input,
      outputFilterSensitiveLog: DescribeOperatingSystemsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeOperatingSystemsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DescribeOperatingSystemsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeOperatingSystemsCommandOutput> {
    return deserializeAws_json1_1DescribeOperatingSystemsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
