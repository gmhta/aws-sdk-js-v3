
import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client.ts";
import { ModifySpotFleetRequestRequest, ModifySpotFleetRequestResponse } from "../models/index.ts";
import {
  deserializeAws_ec2ModifySpotFleetRequestCommand,
  serializeAws_ec2ModifySpotFleetRequestCommand,
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

export type ModifySpotFleetRequestCommandInput = ModifySpotFleetRequestRequest;
export type ModifySpotFleetRequestCommandOutput = ModifySpotFleetRequestResponse & __MetadataBearer;

export class ModifySpotFleetRequestCommand extends $Command<
  ModifySpotFleetRequestCommandInput,
  ModifySpotFleetRequestCommandOutput,
  EC2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ModifySpotFleetRequestCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: EC2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ModifySpotFleetRequestCommandInput, ModifySpotFleetRequestCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      inputFilterSensitiveLog: ModifySpotFleetRequestRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ModifySpotFleetRequestResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ModifySpotFleetRequestCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_ec2ModifySpotFleetRequestCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ModifySpotFleetRequestCommandOutput> {
    return deserializeAws_ec2ModifySpotFleetRequestCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
