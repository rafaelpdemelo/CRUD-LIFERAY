

const siteId = Liferay.ThemeDisplay.getSiteGroupId();

export function getFunction() {
  return Liferay.Util.fetch(
    `/o/headless-delivery/v1.0/sites/${siteId}/blog-postings`,
    { method: "GET" }
  )
    .then((res) => res.json())
    .then((data) => console.log(data));
}

export function postFunction() {
    
    

    let articleBody = document.getElementById("articleBodyPost");
    let headline = document.getElementById("headlinePost");

    const data = {
		headline: `${articleBody.value}`,
		articleBody: `${headline.value}`
	};

    const headers = new Headers();

	headers.append('Content-Type', 'application/json');
    headers.append('Authorization', 'Basic + btoa("test@liferay.com:test")');

	const request = {
		body: JSON.stringify(data),
		headers,
		method: 'POST'
	};

  return Liferay.Util.fetch(
    `/o/headless-delivery/v1.0/sites/${siteId}/blog-postings`,
    request
  ).then((res) => res.json())
  .then((data) => console.log(data));
}

export function deleteFunction(){
  let deletePost = document.getElementById("deletePost");


  const headers = new Headers();

	headers.append('Content-Type', 'application/json');
    headers.append('Authorization', 'Basic + btoa("test@liferay.com:test")');


  const request = {
		headers,
		method: 'DELETE'
	};

  return Liferay.Util.fetch(
    `/o/headless-delivery/v1.0/blog-postings/${deletePost.value}`,
    request
  ).then((res) => res.OK)
  .then((data) => console.log(data));
}

export function getByIdFunction(){
  let postId = document.getElementById("postId");

  const headers = new Headers();

	headers.append('Content-Type', 'application/json');
    headers.append('Authorization', 'Basic + btoa("test@liferay.com:test")');


  const request = {
		headers,
		method: 'GET'
	};


  return Liferay.Util.fetch(
    `/o/headless-delivery/v1.0/blog-postings/${postId.value}`,
    request
  ).then((res) => res.json())
  .then((data) => console.log(data));
}

/*------------------DOCUMENTS-AND-MEDIA-----------------------*/




export function fetchPostImage(){
  

  const selectorFile = document.getElementById("file-selector");
  const formData = new FormData();

  formData.append("file", selectorFile.files[0]);

  const headers = new Headers();

	  
    headers.append('Authorization', 'Basic + btoa("test@liferay.com:test")');

  const request = {
		headers,
		method: 'POST',
    body: formData
	};

  
  return Liferay.Util.fetch(
    `/o/headless-delivery/v1.0/sites/${siteId}/documents`,
    request
  ).then((res) => res.json())
  .then((data) => console.log(data));
}

/*-------- KNOWLEDGE ------------- */

export function postKnowledge() {
    
  let articleBody = document.getElementById("articleBodyPostNew");
  let title = document.getElementById("titlePost");

  const data = {
  articleBody: `${articleBody.value}`,
  title: `${title.value}`
};

  const headers = new Headers();

headers.append('Content-Type', 'application/json');
  headers.append('Authorization', 'Basic + btoa("test@liferay.com:test")');

const request = {
  body: JSON.stringify(data),
  headers,
  method: 'POST'
};

return Liferay.Util.fetch(
  `/o/headless-delivery/v1.0/sites/${siteId}/knowledge-base-articles`,
  request
).then((res) => res.json())
.then((data) => console.log(data));
}


export function getKnowledge (){
  
  return Liferay.Util.fetch(
    `/o/headless-delivery/v1.0/sites/${siteId}/knowledge-base-articles`,
    { method: "GET" }
  )
    .then((res) => res.json())
    .then((data) => console.log(data));
}

export function deleteKnowledge(){
  let deleteKnowledgeId = document.getElementById("deleteKnowledge");


  const headers = new Headers();

	headers.append('Content-Type', 'application/json');
    headers.append('Authorization', 'Basic + btoa("test@liferay.com:test")');


  const request = {
		headers,
		method: 'DELETE'
	};

  return Liferay.Util.fetch(
    `/o/headless-delivery/v1.0/knowledge-base-articles/${deleteKnowledgeId.value}`,
    request
  ).then((res) => res.OK)
  .then((data) => console.log(data));
}