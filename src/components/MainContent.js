import React from 'react'

const MainContent = () => {
  return (
    <div>
      <style>{`
        .main-list > li {
          list-style-type: none;
        }

        .main-list > li > h3::before {
          content: "👉";
          padding: 0 .4rem
        }

        .parent {
          height: 50svh;
        }
      `}
      </style>
<div className="d-grid align-items-center">
  
          <h1>Como encuentro mis archivos?</h1>
          <ul className='main-list d-grid gap-3'>
            <li>
              <h3>Hacé click en la pestaña de tu cátedra/institución.</h3>
            </li>
            <li>
              <h3>Navegá a través del feed y descargá el archivo que necesites!</h3>
            </li>
          </ul>
</div>
    </div>
  )
}

export default MainContent