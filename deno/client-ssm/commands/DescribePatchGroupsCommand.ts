
import { SSMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SSMClient.ts";
import { DescribePatchGroupsRequest, DescribePatchGroupsResult } from "../models/index.ts";
import {
  deserializeAws_json1_1DescribePatchGroupsCommand,
  serializeAws_json1_1DescribePatchGroupsCommand,
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

export type DescribePatchGroupsCommandInput = DescribePatchGroupsRequest;
export type DescribePatchGroupsCommandOutput = DescribePatchGroupsResult & __MetadataBearer;

export class DescribePatchGroupsCommand extends $Command<
  DescribePatchGroupsCommandInput,
  DescribePatchGroupsCommandOutput,
  SSMClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribePatchGroupsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SSMClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribePatchGroupsCommandInput, DescribePatchGroupsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      inputFilterSensitiveLog: DescribePatchGroupsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribePatchGroupsResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribePatchGroupsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DescribePatchGroupsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribePatchGroupsCommandOutput> {
    return deserializeAws_json1_1DescribePatchGroupsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
