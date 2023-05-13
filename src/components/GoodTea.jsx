import React from 'react'
import goodtea from '../assets/img/goodtea.png'

const GoodTea = () => {
    return (
        <section className='goodtea padding-x'>
            <div className="text">
                <h1 className='section-header'>Keyfiyyətli Çayın Gücü</h1>
                <p>Yaxşı bir stəkan çay dincəlməyə, hərəkətli bir günə hazırlaşmağa və ya fasilə vermək və nəfəs almaq üçün bir an ayırmağa kömək edə bilər.</p>
                <p>Biz diqqətlə seçilmiş, ustalıqla qablaşdırılan, birbaşa qapınıza göndərilən qarışıqları təklif edirik - beləliklə, mükəmməl fincan hazırlayasınız!</p>
                <button className="btn btn-primary">Alışverişə Başla!</button>
            </div>
            
            <div className="img"><img src={goodtea} alt="" /></div>
        </section>
    )
}

export default GoodTea