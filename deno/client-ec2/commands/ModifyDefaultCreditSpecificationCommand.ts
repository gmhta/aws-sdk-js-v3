
import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client.ts";
import { ModifyDefaultCreditSpecificationRequest, ModifyDefaultCreditSpecificationResult } from "../models/index.ts";
import {
  deserializeAws_ec2ModifyDefaultCreditSpecificationCommand,
  serializeAws_ec2ModifyDefaultCreditSpecificationCommand,
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

export type ModifyDefaultCreditSpecificationCommandInput = ModifyDefaultCreditSpecificationRequest;
export type ModifyDefaultCreditSpecificationCommandOutput = ModifyDefaultCreditSpecificationResult & __MetadataBearer;

export class ModifyDefaultCreditSpecificationCommand extends $Command<
  ModifyDefaultCreditSpecificationCommandInput,
  ModifyDefaultCreditSpecificationCommandOutput,
  EC2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ModifyDefaultCreditSpecificationCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: EC2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ModifyDefaultCreditSpecificationCommandInput, ModifyDefaultCreditSpecificationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      inputFilterSensitiveLog: ModifyDefaultCreditSpecificationRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ModifyDefaultCreditSpecificationResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: ModifyDefaultCreditSpecificationCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_ec2ModifyDefaultCreditSpecificationCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ModifyDefaultCreditSpecificationCommandOutput> {
    return deserializeAws_ec2ModifyDefaultCreditSpecificationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
