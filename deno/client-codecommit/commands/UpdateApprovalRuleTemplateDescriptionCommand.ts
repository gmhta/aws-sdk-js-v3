
import { CodeCommitClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeCommitClient.ts";
import {
  UpdateApprovalRuleTemplateDescriptionInput,
  UpdateApprovalRuleTemplateDescriptionOutput,
} from "../models/index.ts";
import {
  deserializeAws_json1_1UpdateApprovalRuleTemplateDescriptionCommand,
  serializeAws_json1_1UpdateApprovalRuleTemplateDescriptionCommand,
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

export type UpdateApprovalRuleTemplateDescriptionCommandInput = UpdateApprovalRuleTemplateDescriptionInput;
export type UpdateApprovalRuleTemplateDescriptionCommandOutput = UpdateApprovalRuleTemplateDescriptionOutput &
  __MetadataBearer;

export class UpdateApprovalRuleTemplateDescriptionCommand extends $Command<
  UpdateApprovalRuleTemplateDescriptionCommandInput,
  UpdateApprovalRuleTemplateDescriptionCommandOutput,
  CodeCommitClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdateApprovalRuleTemplateDescriptionCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CodeCommitClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateApprovalRuleTemplateDescriptionCommandInput, UpdateApprovalRuleTemplateDescriptionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      inputFilterSensitiveLog: UpdateApprovalRuleTemplateDescriptionInput.filterSensitiveLog,
      outputFilterSensitiveLog: UpdateApprovalRuleTemplateDescriptionOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: UpdateApprovalRuleTemplateDescriptionCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1UpdateApprovalRuleTemplateDescriptionCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<UpdateApprovalRuleTemplateDescriptionCommandOutput> {
    return deserializeAws_json1_1UpdateApprovalRuleTemplateDescriptionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
