import './LinesLoader.css'

function LinesLoader() {
    let test = [];
    for (let i = 0; i < 4; i++) {
        test.push(<div className='LineLoader' key={i}>
            <div className='inLoader' style={{'--i': `${i/10}s`}}></div>
        </div>)
    }
  return (
    <div className='d-flex flex-column gap-2'>
        {
            test
        }
    </div>
  )
}

export default LinesLoader