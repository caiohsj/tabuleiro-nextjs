export default function Block(props) {
  return (
    <div
      className="block"
      style={{
        backgroundColor: ((props.row % 2 === 0 && props.column % 2 === 0) || (props.row % 2 !== 0 && props.column % 2 !== 0)) ? 'white' : 'black'
      }}
    ></div>
  )
}