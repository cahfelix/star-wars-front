export default function PageLayout({ title, children }) {
  return (
    <div className="page-container">
      {/* <h1 className="page-title">{title}</h1> */}
      {children}
    </div>
  )
}