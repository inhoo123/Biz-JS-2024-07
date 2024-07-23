const naver = () => {
  fetch("http://http://localhost:8080/student")
    .then((res) => {
      return res.text();
    })
    .then((text) => console.log(text));
};
export { naver };
