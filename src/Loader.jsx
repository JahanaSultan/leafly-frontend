import loader from './assets/img/tea.gif'

function Loader() {
  return (
    <div className="loader">
        <img src={loader} alt="" />
        <p>Yüklənir...</p>
    </div>
  )
}

export default Loader