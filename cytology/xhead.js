
module.exports = `<script>

let screen = 'leucocytes';    // current screen

const tabdata = [

        { screen:'leucocytes', title:"Normal Leucocytes" },

        { screen:'other', title:"Other cells" },
]

const bindTo = (target,adata,edata,xdata)=>{ 
    
    let dorr = binder( target,adata,edata,xdata );

    if( dorr.length > 0 ){

        if( dorr[0] == "modact" ){
            modAct( dorr[1], dorr[2], dorr[3], dorr[4] )
        return true
       
        console.warn('bounDo: Unknown command')
        return false
    }
    
}

function listeners(){

    document.querySelectorAll('[data-bindto]').forEach((el)=>{

        //console.log(el.getAttribute('data-b'));

        if( el.getAttribute('data-func') === 'click' ){

            el.addEventListener('click',(e)=>{

                console.log("Click!");

                let aval = e.srcElement.getAttribute('data-aval') ? e.srcElement.getAttribute('data-aval') : 'null';
                
                let bval = e.srcElement.getAttribute('data-bval') ? e.srcElement.getAttribute('data-bval') : 'null';

                let cval = e.srcElement.getAttribute('data-cval') ? e.srcElement.getAttribute('data-cval') : 'null';

                bindTo(e.srcElement.getAttribute('data-bindto'),aval,bval,cval);

            })
        }
        else if( el.getAttribute('data-func') === 'input' ){

            el.addEventListener('change',(e)=>{

                console.log("Change!");

            })
        }

        

    })
}
</script>`