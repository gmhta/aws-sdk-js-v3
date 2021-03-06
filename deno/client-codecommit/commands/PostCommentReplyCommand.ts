
import { CodeCommitClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeCommitClient.ts";
import { PostCommentReplyInput, PostCommentReplyOutput } from "../models/index.ts";
import {
  deserializeAws_json1_1PostCommentReplyCommand,
  serializeAws_json1_1PostCommentReplyCommand,
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

export type PostCommentReplyCommandInput = PostCommentReplyInput;
export type PostCommentReplyCommandOutput = PostCommentReplyOutput & __MetadataBearer;

export class PostCommentReplyCommand extends $Command<
  PostCommentReplyCommandInput,
  PostCommentReplyCommandOutput,
  CodeCommitClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: PostCommentReplyCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CodeCommitClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<PostCommentReplyCommandInput, PostCommentReplyCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      inputFilterSensitiveLog: PostCommentReplyInput.filterSensitiveLog,
      outputFilterSensitiveLog: PostCommentReplyOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: PostCommentReplyCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1PostCommentReplyCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<PostCommentReplyCommandOutput> {
    return deserializeAws_json1_1PostCommentReplyCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
