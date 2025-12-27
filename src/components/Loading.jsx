import './Loading.css'

export default function Loading(){
  return (
    <div className="loading-root" role="status" aria-live="polite">
      <div className="spinner" />
      <div className="loading-text">Loading...</div>
    </div>
  )
}
