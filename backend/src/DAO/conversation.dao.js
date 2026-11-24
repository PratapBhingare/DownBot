import { ConversationModel } from '../models/conversation.model.js';

/**
 * @param {{user: string | import('mongoose').Types.ObjectId, title?: string}} input Conversation owner and title.
 * @returns {Promise<import('../types/conversation.js').Conversation>} Persisted conversation.
 */
export async function createConversation(input) {
  return ConversationModel.create(input);
}