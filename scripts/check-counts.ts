import { createClient } from 'next-sanity'
import { apiVersion, dataset, projectId, useCdn } from '../sanity/env'

const client = createClient({
    projectId,
    dataset,
    apiVersion,
    useCdn: false, // Force fresh data
})

async function check() {
    console.log(`Checking project: ${projectId} dataset: ${dataset}`);

    const eventCount = await client.fetch(`count(*[_type == "event"])`);
    const boardCount = await client.fetch(`count(*[_type == "executiveBoard"])`);
    const committeeCount = await client.fetch(`count(*[_type == "committee"])`);

    console.log('--- Data Counts ---');
    console.log(`Events: ${eventCount}`);
    console.log(`Executive Board: ${boardCount}`);
    console.log(`Committees: ${committeeCount}`);
    console.log('-------------------');
}

check().catch(console.error);
