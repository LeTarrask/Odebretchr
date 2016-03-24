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
	v = v.replace(/\bEduardo Paes\b/g, "Nervosinho");
	v = v.replace(/\bJosé Sarney\b/g, "Escritor");
	v = v.replace(/\bSérgio Cabral\b/g, "Proximus");
	
	
	v = v.replace(/\bLindbergh Farias\b/g, "Lindinho");
	v = v.replace(/\bHumberto Costa\b/g, "Drácula");
	v = v.replace(/\bRenan Calheiros\b/g, "Atleta");
	v = v.replace(/\bManuela d'Ávila\b/g, "Avião");
	v = v.replace(/\bJarbas Vasconcelos\b/g, "Viagra");
	v = v.replace(/\bRandolfe Rodrigues \b/g, "Múmia");
	
	
	textNode.nodeValue = v;
}


