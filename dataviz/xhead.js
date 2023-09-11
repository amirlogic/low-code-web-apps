
module.exports = `<script>

let screen = 'leucocytes';    // current screen

const tabdata = [

        { screen:'leucocytes', title:"Normal Leucocytes" },

        { screen:'other', title:"Other cells" },
]

const binder = ( ndl='unknown', adata='null', bdata='null', cdata='null' )=>{ 

	if( ndl == "imageselector" ){ 	// Image selector

		console.log(adata);

		//modAct( "507bd06d-3806-4e72-a8ed-514e09fc40b1", { payload:payload[screen], bindto:ndl, imgkey:adata } );

        window.location = '/'+adata

	 	return [] 
	}
	else if( ndl == "imageselectorleftcol" ){ 	// Image selector (leftcol)

		//console.log(adata);

		let pgurl = new URL(window.location.href)

        pgurl.searchParams.set('cell',adata)

        console.log(pgurl.href);

        window.location = pgurl.href

	 	return [] 
	}
}

const bindTo = (target,adata,edata,xdata)=>{ 
    
    let dorr = binder( target,adata,edata,xdata );
    
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