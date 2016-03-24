//credit goes to Steven Frank of Cloud to Butt (https://github.com/panicsteve/cloud-to-butt/)
//credit also goes to Lauren Orsini of Caaaarbs (https://github.com/laurenorsini/caaaaarbs)

walk(document.body);

function walk(node)  
{
	// I stole this function from here:
	// http://is.gd/mwZp7E
	
	var child, next;

	switch ( node.nodeType )  
	{
		case 1: 
		case 9:  
		case 11: 
			child = node.firstChild;
			while ( child ) 
			{
				next = child.nextSibling; 
				walk(child);
				child = next;
			}
			break;

		case 3: 
			handleText(node);
			break;
	}
}

function handleText(textNode) 
{
	var v = textNode.nodeValue;

	v = v.replace(/\bEduardo Cunha\b/g, "Caranguejo");
	v = v.replace(/\bJacques Wagner\b/g, "Passivo");
	v = v.replace(/\bJoão Santana\b/g, "Feira");
	v = v.replace(/\bJoao Santana\b/g, "Feira");
	v = v.replace(/\bEduardo Paes\b/g, "Nervosinho");
	v = v.replace(/\bJosé Sarney\b/g, "Escritor");
	v = v.replace(/\bJose Sarney\b/g, "Escritor");	
	v = v.replace(/\bSérgio Cabral\b/g, "Proximus");
	v = v.replace(/\bSergio Cabral\b/g, "Proximus");
	v = v.replace(/\bLindembergh Farias\b/g, "Lindinho");
	v = v.replace(/\bHumberto Costa\b/g, "Drácula");
	v = v.replace(/\bRenan Calheiros\b/g, "Atleta");
	v = v.replace(/\bManuela d'Ávila\b/g, "Avião");
	v = v.replace(/\bManuela d'Avila\b/g, "Avião");
	v = v.replace(/\bJarbas Vasconcelos Filho\b/g, "Viagra");
	v = v.replace(/\bJarbas Vasconcelos\b/g, "Viagra");
	v = v.replace(/\bRandolfe Rodrigues\b/g, "Múmia");

	v = v.replace(/\bAécio Neves\b/g, "Chato das propinas");
	v = v.replace(/\bAecio Neves\b/g, "Chato das propinas");	

	v = v.replace(/\bMarcelo Nilo\b/g, "Candomble");
	v = v.replace(/\bEdvaldo Brito\b/g, "Rio");
	v = v.replace(/\bDaniel Almeida\b/g, "Comuna");	
	v = v.replace(/\bPaulo Magalhães\b/g, "Goleiro");
	v = v.replace(/\bPaulo Magalhaes\b/g, "Goleiro");
	v = v.replace(/\bGeraldo Júlio\b/g, "Neto");
	v = v.replace(/\bRaul Jungmann\b/g, "Bruto");
	v = v.replace(/\bEtore Labanca\b/g, "Cacique");	
	v = v.replace(/\bFabio Branco\b/g, "Colorido");
	v = v.replace(/\bMário Kertesz\b/g, "Roberval");
	v = v.replace(/\bMario Kertesz\b/g, "Roberval");
	v = v.replace(/\bArtur Maia\b/g, "Tuca");
	v = v.replace(/\bJorge Picciani\b/g, "Grego");
	v = v.replace(/\bAdão Villaverde\b/g, "Eva");
	v = v.replace(/\bAdao Villaverde\b/g, "Eva");
	v = v.replace(/\bCarlos Todeschini\b/g, "Alemao");	
	v = v.replace(/\bTarcísio Zimmermann\b/g, "Irmao");
	v = v.replace(/\bTarcisio Zimmermann\b/g, "Irmao");
	v = v.replace(/\bJairo Jorge\b/g, "Nordeste");
	v = v.replace(/\bNelson Pelegrino\b/g, "Pelé");
	v = v.replace(/\bPedro Eugênio\b/g, "Droeu");
	v = v.replace(/\bPedro Eugenio\b/g, "Droeu");
	v = v.replace(/\bPaulo Garcia\b/g, "Pastor");
	v = v.replace(/\bPCid Gomes\b/g, "Falso");
	v = v.replace(/\bPSebastião Almeida\b/g, "Sumido");
	v = v.replace(/\bPSebastiao Almeida\b/g, "Sumido");
	

	textNode.nodeValue = v;
}


