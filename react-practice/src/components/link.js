const Link = (props) => 
<a
  className="App-link"
  onClick={props.onClick}
>
  {props.text}
</a>

// const Link = (props) => {
//   return <a
//   className="App-link"
//   onClick={props.onClick}
// >
//   {props.text}
// </a>
// } //こっちが正式だが上が一般的

export default Link;