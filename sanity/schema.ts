import { type SchemaTypeDefinition } from 'sanity'

import committee from './schemas/committee'
import executiveBoard from './schemas/executiveBoard'

export const schema: { types: SchemaTypeDefinition[] } = {
    types: [committee, executiveBoard],
}
