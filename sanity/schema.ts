import { type SchemaTypeDefinition } from 'sanity'

import committee from './schemas/committee'
import executiveBoard from './schemas/executiveBoard'
import shpetina from './schemas/shpetina'
import shpetinaSpotlight from './schemas/shpetinaSpotlight'

export const schema: { types: SchemaTypeDefinition[] } = {
    types: [committee, executiveBoard, shpetina, shpetinaSpotlight],
}
