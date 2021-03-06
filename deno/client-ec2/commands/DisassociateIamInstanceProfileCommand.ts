
import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client.ts";
import { DisassociateIamInstanceProfileRequest, DisassociateIamInstanceProfileResult } from "../models/index.ts";
import {
  deserializeAws_ec2DisassociateIamInstanceProfileCommand,
  serializeAws_ec2DisassociateIamInstanceProfileCommand,
} from "../protocols/Aws_ec2.ts";
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

export type DisassociateIamInstanceProfileCommandInput = DisassociateIamInstanceProfileRequest;
export type DisassociateIamInstanceProfileCommandOutput = DisassociateIamInstanceProfileResult & __MetadataBearer;

export class DisassociateIamInstanceProfileCommand extends $Command<
  DisassociateIamInstanceProfileCommandInput,
  DisassociateIamInstanceProfileCommandOutput,
  EC2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DisassociateIamInstanceProfileCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: EC2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DisassociateIamInstanceProfileCommandInput, DisassociateIamInstanceProfileCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      inputFilterSensitiveLog: DisassociateIamInstanceProfileRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DisassociateIamInstanceProfileResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: DisassociateIamInstanceProfileCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_ec2DisassociateIamInstanceProfileCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DisassociateIamInstanceProfileCommandOutput> {
    return deserializeAws_ec2DisassociateIamInstanceProfileCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
