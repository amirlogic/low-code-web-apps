
const imglink = { 'monocyte':'https://www.hematocell.fr/images/diaporama/diapositives/49/9.jpg', 
                  'eosinophile':'https://www.hematocell.fr/images/diaporama/diapositives/49/18.jpg',
                  'erythrocyte':'https://www.hematocell.fr/images/Images-GR/5gropti.JPG' }

const payload = {

    'leucocytes':[
        
        { key:'monocyte', title:"Monocyte", src:imglink['monocyte'], caption:"source: hematocell.fr", body:"This is a monocyte" },

        { key:'monocytebis', title:"Monocyte", src:imglink['monocyte'], caption:"source: hematocell.fr", body:"This is a another monocyte" },

        { key:'eosinophile', title:"Eosinophile", src:imglink['eosinophile'], caption:"source: hematocell.fr", body:"This is an eosinophile" },
    ],

    'other':[

        { key:'erythrocytes', title:"Erythrocytes", src:imglink['erythrocyte'], caption:"source: hematocell.fr", body:"Erythrocytes (Red blood cells)" }
    ]
}

module.exports = { payload }