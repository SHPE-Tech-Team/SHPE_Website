import { type SchemaTypeDefinition } from 'sanity'

import committee from './schemas/committee'
import event from './schemas/event'
import executiveBoard from './schemas/executiveBoard'
import settings from './schemas/settings'

export const schema: { types: SchemaTypeDefinition[] } = {
    types: [committee, event, executiveBoard, settings],
}
