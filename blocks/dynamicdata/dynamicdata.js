import {
  createOptimizedPicture
} from '../../scripts/aem.js';

export default async function decorate (block) {
  fetchData(block);
}

async function fetchData(block) {
  const response = await fetch(
  'https://publish-p110016-e1074395.adobeaemcloud.com/graphql/execute.json/santanderbank/OpenbankTeaserList',
  {mode:"no-cors"}
  );
  block.append(response.title);
  console.log(response);

}