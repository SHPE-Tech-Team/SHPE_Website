import { type SchemaTypeDefinition } from 'sanity'

import committee from './schemas/committee'
import event from './schemas/event'

export const schema: { types: SchemaTypeDefinition[] } = {
    types: [committee, event],
}
