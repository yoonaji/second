const instaForm = document.querySelector("#instaForm");
const commentsContainer = document.querySelector("#comments");
document.addEventListener("DOMContentLoaded",() =>{
  const comments = JSON.parse(localStorage.getItem("comments")) || [];
  comments.forEach(comment => addComment(comment.username,comment.text));  
  });

instaForm.addEventListener("submit",function(e){
  e.preventDefault();
  const usernameInput = instaForm.elements.username;
  const commentInput = instaForm.elements.comment;
  addComment(usernameInput.value, commentInput.value);
  saveComment(usernameInput.value, commentInput.value);
  usernameInput.value = "";
  commentInput.value = "";
});
const addComment = (username, comment) => {
  const newComment = document.createElement("li");
  const bTag = document.createElement("b");
  bTag.append(username);
  newComment.append(bTag);
  newComment.append(` - ${comment}`);
  commentsContainer.append(newComment);
};
const saveComment = (username,text) => {
  const comments = JSON.parse(localStorage.getItem("comments")) || [];
  comments.push({username, text});
  localStorage.setItem("comments",JSON.stringify(comments));
}
