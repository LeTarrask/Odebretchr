//credit goes to Steven Frank of Cloud to Butt (https://github.com/panicsteve/cloud-to-butt/)
//credit also goes to Lauren Orsini of Caaaarbs (https://github.com/laurenorsini/caaaaarbs)
// Most of the nicknames came from https://g1.globo.com/politica/operacao-lava-jato/noticia/apelidos-de-politicos-na-odebrecht-quem-e-quem.ghtml
// This project lives on https://github.com/LeTarrask/Odebretchr
// We currently have 243 names.


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

	v = v.replace(/\bACM Neto\b/g, "Anão");
	v = v.replace(/\bAdão Vilaverde\b/g, "Eva");
	v = v.replace(/\bAdao Villaverde\b/g, "Eva");
	v = v.replace(/\bAdão Villaverde\b/g, "Eva");
	v = v.replace(/\bAdemar Traiano\b/g, "Praia");
	v = v.replace(/\bAdolfo Viana\b/g, "Jovem");
	v = v.replace(/\bAdrian Mussi\b/g, "Flamengo");
	v = v.replace(/\bAécio Neves\b/g, "Chato das propinas");
	v = v.replace(/\bAecio Neves\b/g, "Chato das propinas");	
	v = v.replace(/\bAécio Neves\b/g, "Mineirinho");
	v = v.replace(/\bAgnelo Queiroz\b/g, "Comprido");
	v = v.replace(/\bAlberto Pinto Coelho\b/g, "Da Casa");
	v = v.replace(/\bAlcebíades Sabino\b/g, "Atravessador");
	v = v.replace(/\bAlexandre Passos\b/g, "Sapato");
	v = v.replace(/\bAlexandre Postal\b/g, "Correios");
	v = v.replace(/\bAlexandre Silveira\b/g, "Silo");
	v = v.replace(/\bAloizio Mercadante\b/g, "Aracaju");
	v = v.replace(/\bAloysio Nunes\b/g, "Manaus");
	v = v.replace(/\bAna Amélia Lemos\b/g, "Coluna");
	v = v.replace(/\bAna Paula Lima\b/g, "Musa");
	v = v.replace(/\bAndré Correa\b/g, "Verdinho");
	v = v.replace(/\bAndrés Sanchez\b/g, "Timão");
	v = v.replace(/\bAngela Amin\b/g, "Aspirina");
	v = v.replace(/\bAnthony Garotinho\b/g, "Bolinha");
	v = v.replace(/\bAntonio Anastasia\b/g, "Dengo");
	v = v.replace(/\bAntonio Andrade\b/g, "Wanda");
	v = v.replace(/\bAntonio Carlos Magalhães Neto\b/g, "Anão");
	v = v.replace(/\bAntônio de Brito\b/g, "Misericórdia");
	v = v.replace(/\bAntonio Palocci\b/g, "Italiano");	
	v = v.replace(/\bArlete Magalhães\b/g, "Paris");
	v = v.replace(/\bArlindo Chinaglia\b/g, "Grisalho");
	v = v.replace(/\bArnaldo Jardim\b/g, "Carajás");	
	v = v.replace(/\bArselino Tatto\b/g, "Contas");
	v = v.replace(/\bArthur Maia\b/g, "Tuca");
	v = v.replace(/\bArtur Maia\b/g, "Tuca");
	v = v.replace(/\bArtur Virgílio\b/g, "Kimono");
	v = v.replace(/\bAudifax Barcelos\b/g, "Italiano");
	v = v.replace(/\bAyrton Xerez\b/g, "Persa");
	v = v.replace(/\bBarros Munhoz\b/g, "Cruzeiro do Sul");
	v = v.replace(/\bBernardo Ariston\b/g, "Rasputinzinho");
	v = v.replace(/\bBernardo Santana\b/g, "Igreja");	
	v = v.replace(/\bBeto Albuquerque\b/g, "Trincaferro");	
	v = v.replace(/\bBeto Mansur\b/g, "BMW");
	v = v.replace(/\bBeto Richa\b/g, "Brigão");
	v = v.replace(/\bBlairo Maggi\b/g, "Caldo");
	v = v.replace(/\bBraz Antunes Mattos Neto\b/g, "Adoniran");
	v = v.replace(/\bBruno Araújo\b/g, "Jujuba");
	v = v.replace(/\bBruno Siqueira\b/g, "Fino");
	v = v.replace(/\bCampos Machado\b/g, "Itabuna");
	v = v.replace(/\bCarlos Melles\b/g, "Da hora");
	v = v.replace(/\bCarlos Todeschini\b/g, "Alemão");
	v = v.replace(/\bCarlos Todeschini\b/g, "Alemao");	
	v = v.replace(/\bCarlos Zarattini\b/g, "Guarulhos");
	v = v.replace(/\bCássio Cunha Lima\b/g, "Prosador");	
	v = v.replace(/\bCélio Moreira\b/g, "Frances");
	v = v.replace(/\bCelso Russomanno\b/g, "Itacaré");
	v = v.replace(/\bCesar Colnago\b/g, "Gripe");	
	v = v.replace(/\bCésar Maia\b/g, "Déspota");
	v = v.replace(/\bCida Borghetti\b/g, "Princesa");
	v = v.replace(/\bCiro Nogueira\b/g, "Cerrado");
	v = v.replace(/\bColbert Martins Filho\b/g, "Médico");
	v = v.replace(/\bDalírio Beber\b/g, "Conquistador");	
	v = v.replace(/\bDaniel Almeida\b/g, "Comuna");
	v = v.replace(/\bDaniel Almeida\b/g, "Comuna");	
	v = v.replace(/\bDelcídio do Amaral\b/g, "Ferrari");
	v = v.replace(/\bDimas Fabiano Jr.\b/g, "Filhinho");	
	v = v.replace(/\bDomingos Sávio\b/g, "Sábado");
	v = v.replace(/\bDuarte Nogueira\b/g, "Ponta Porã");	
	v = v.replace(/\bDurval Amaral\b/g, "Amarelou");
	v = v.replace(/\bEdinho Bez\b/g, "Mercedes");	
	v = v.replace(/\bEdinho Silva\b/g, "Itambé");	
	v = v.replace(/\bEdison Lobão\b/g, "Esquálido");	
	v = v.replace(/\bEdson Aparecido dos Santos\b/g, "Itumbiara");
	v = v.replace(/\bEduardo Azeredo\b/g, "Padrinho");
	v = v.replace(/\bEduardo Campos\b/g, "Neto");	
	v = v.replace(/\bEduardo Cunha\b/g, "Caranguejo");
	v = v.replace(/\bEduardo Paes\b/g, "Nervosinho");
	v = v.replace(/\bEduardo Paes\b/g, "Nervosinho");
	v = v.replace(/\bEduardo Siqueira Campos\b/g, "Acelerado");
	v = v.replace(/\bEdvaldo Brito\b/g, "Rio");
	v = v.replace(/\bEdvaldo de Brito\b/g, "Candomblé");	
	v = v.replace(/\bElbe Brandão\b/g, "Fazendão");
	v = v.replace(/\bEliseu Padilha\b/g, "Angorá");
	v = v.replace(/\bElismar Prado\b/g, "Jornalista");
	v = v.replace(/\bEsmael de Almeida\b/g, "Canário");
	v = v.replace(/\bEtore Labanca\b/g, "Cacique");	
	v = v.replace(/\bEunício de Oliveira\b/g, "Índio");
	v = v.replace(/\bFabiano Pereira\b/g, "Carmem");
	v = v.replace(/\bFabio Branco\b/g, "Colorido");
	v = v.replace(/\bFabio Faria\b/g, "Garanhão");
	v = v.replace(/\bFabio Ramalho\b/g, "Barrigudo");	
	v = v.replace(/\bFernando Bezerra\b/g, "Novilho");	
	v = v.replace(/\bFernando Capez\b/g, "Brasília");
	v = v.replace(/\bFernando Collor\b/g, "Roxinho");	
	v = v.replace(/\bFernando Pimentel\b/g, "Do reino");
	v = v.replace(/\bFrancisco Appio\b/g, "Abelha");
	v = v.replace(/\bFrancisco Chagas\b/g, "Campinas");
	v = v.replace(/\bFrederico Antunes\b/g, "Fodinha");	
	v = v.replace(/\bGaribaldi Alves\b/g, "Lento");
	v = v.replace(/\bGeddel Vieira Lima\b/g, "Babel");	
	v = v.replace(/\bGeraldo Alckmin\b/g, "M&M");
	v = v.replace(/\bGeraldo Júlio\b/g, "Neto");
	v = v.replace(/\bGermano Rigotto\b/g, "Desesperado");
	v = v.replace(/\bGil Pereira\b/g, "Lagarto");	
	v = v.replace(/\bGilberto Kassab\b/g, "Chefe Turco");
	v = v.replace(/\bGim Argello\b/g, "Campari");
	v = v.replace(/\bGleisi Hoffmann\b/g, "Amante ou Coxa");
	v = v.replace(/\bGuido Mantega\b/g, "Pós-italiano");
	v = v.replace(/\bGuilherme Lacerda\b/g, "Magma");
	v = v.replace(/\bGustavo Correa\b/g, "Dentada");
	v = v.replace(/\bGustavo Fruet\b/g, "Dentuço");
	v = v.replace(/\bGustavo Valadares\b/g, "Tio");
	v = v.replace(/\bHelder Barbalho\b/g, "Cavanhaque");
	v = v.replace(/\bHenrique Carballal\b/g, "Buzu");
	v = v.replace(/\bHeráclito Fortes\b/g, "Boca mole");
	v = v.replace(/\bHudson Braga\b/g, "Oxigênio");
	v = v.replace(/\bHugo Napoleão\b/g, "Diplomata");	
	v = v.replace(/\bHumberto Costa\b/g, "Drácula");
	v = v.replace(/\bIdeli Salvatti\b/g, "Fantasma");
	v = v.replace(/\bInaldo Leitão\b/g, "Todo Feio");
	v = v.replace(/\bIriny Lopes\b/g, "Masculina");
	v = v.replace(/\bIris Rezende\b/g, "Babão");
	v = v.replace(/\bIvar Pavan\b/g, "Pavão");	
	v = v.replace(/\bIvo Cassol\b/g, "Maçaranduba");	
	v = v.replace(/\bJader Barbalho\b/g, "Jacaré");
	v = v.replace(/\bJairo Jorge\b/g, "Nordeste");
	v = v.replace(/\bJaques Wagner\b/g, "Passivo");
	v = v.replace(/\bJaques Wagner\b/g, "Polo");
	v = v.replace(/\bJarbas Vasconcelos Filho\b/g, "Viagra");
	v = v.replace(/\bJarbas Vasconcelos\b/g, "Viagra");
	v = v.replace(/\bJoão Alves Filho\b/g, "Louro");
	v = v.replace(/\bJoão Fischer\b/g, "Aquático");
	v = v.replace(/\bJoão Paulo Cunha\b/g, "Santo André");
	v = v.replace(/\bJoão Paulo Papa\b/g, "Benzedor");
	v = v.replace(/\bJoão Paulo Rillo\b/g, "Boiadeiro");
	v = v.replace(/\bJoao Santana\b/g, "Feira");
	v = v.replace(/\bJoão Vaccari\b/g, "Guerrilheiro");
	v = v.replace(/\bJorge Bittar\b/g, "Passadão");
	v = v.replace(/\bJorge Picciani\b/g, "Grego");
	v = v.replace(/\bJorge Piciani\b/g, "Grego");
	v = v.replace(/\bJosé Agripino\b/g, "Gripado");	
	v = v.replace(/\bJosé Anibal\b/g, "Navegante");
	v = v.replace(/\bJosé Carlos Aleluia\b/g, "Missa");
	v = v.replace(/\bJosé Chaves\b/g, "Chaveiro");
	v = v.replace(/\bJosé Dirceu\b/g, "Guerrilheiro");
	v = v.replace(/\bJosé Fernando de Oliveira\b/g, "Azeitona");
	v = v.replace(/\bJosé Genoíno\b/g, "Natal");
	v = v.replace(/\bJosé Maria Eymael\b/g, "Itatiaia");
	v = v.replace(/\bJosé Otávio Germano\b/g, "Enteado");
	v = v.replace(/\bJosé Roberto Arruda\b/g, "Parreira");
	v = v.replace(/\bJosé Sarney\b/g, "Escritor");
	v = v.replace(/\bJose Sarney\b/g, "Escritor");	
	v = v.replace(/\bJosé Serra\b/g, "Vizinho");
	v = v.replace(/\bJosenildo Sinésio\b/g, "Padre");
	v = v.replace(/\bJuarez Amorim\b/g, "Doutor");
	v = v.replace(/\bJuarez Amorim\b/g, "Segundo");
	v = v.replace(/\bJúlio Delgado\b/g, "Zagueiro");	
	v = v.replace(/\bJulio Lopes\b/g, "Casa de Doido");
	v = v.replace(/\bJulio Lopes\b/g, "Pavão");	
	v = v.replace(/\bJutahy Magalhães\b/g, "Moleza");
	v = v.replace(/\bKátia Abreu\b/g, "Machado");
	v = v.replace(/\bLídice da Mata\b/g, "Feia");
	v = v.replace(/\bLindberg Farias\b/g, "Lindinho");	
	v = v.replace(/\bLindbergh Farias\b/g, "Lindinho");	
	v = v.replace(/\bLindembergh Farias\b/g, "Lindinho");
	v = v.replace(/\bLorena de Fátima Arrué Dias\b/g, "Protegida");	
	v = v.replace(/\bLúcio Vieira Lima\b/g, "Bitelo");
	v = v.replace(/\bLúdio Cabral\b/g, "Ema");	
	v = v.replace(/\bLuiz Carlos Busato\b/g, "Jangada");
	v = v.replace(/\bLuiz Carlos Hauly\b/g, "Decodificado");
	v = v.replace(/\bLuiz Fernando Faria\b/g, "Lima");
	v = v.replace(/\bLuiz Fernando Pezão\b/g, "Proximus");
	v = v.replace(/\bLuiz Fernando T. Ferreira\b/g, "Lamborghini");	
	v = v.replace(/\bLula\b/g, "Amigo");	
	v = v.replace(/\bLuiz Inácio Lula da Silva\b/g, "Amigo");	
	v = v.replace(/\bLuiz Paulo Correa da Costa\b/g, "Disco");	
	v = v.replace(/\bLuiz Paulo Vellozo\b/g, "Filhote");
	v = v.replace(/\bManoel Neca\b/g, "Baixada");
	v = v.replace(/\bManuela d'Avila\b/g, "Avião");
	v = v.replace(/\bManuela d'Ávila\b/g, "Avião");
	v = v.replace(/\bMarcelo Nilo\b/g, "Candomble");
	v = v.replace(/\bMarcelo Nilo\b/g, "Rio");
	v = v.replace(/\bMárcio França\b/g, "Parente");
	v = v.replace(/\bMarcio Lacerda\b/g, "Poste");
	v = v.replace(/\bMárcio Reinaldo\b/g, "Jogador");	
	v = v.replace(/\bMarco Alba\b/g, "Escuro");
	v = v.replace(/\bMarco Maia\b/g, "Aliado ou Gremista");
	v = v.replace(/\bMarconi Perillo\b/g, "Patati");
	v = v.replace(/\bMarcos Montes\b/g, "Montanha");
	v = v.replace(/\bMaria do Carmo Lara Rezende\b/g, "Bateria");
	v = v.replace(/\bMaria do Rosário\b/g, "Solução");	
	v = v.replace(/\bMário Kertesz\b/g, "Roberval Taylor");
	v = v.replace(/\bMario Kertesz\b/g, "Roberval Taylor");
	v = v.replace(/\bMarta Suplicy\b/g, "Barbie");
	v = v.replace(/\bMax Filho\b/g, "Novo");
	v = v.replace(/\bMendes Ribeiro Filho\b/g, "Cérebro");	
	v = v.replace(/\bMoreira Franc\b/g, "Primo");
	v = v.replace(/\bNapoleão Bernardes\b/g, "Conquistador");	
	v = v.replace(/\bNelson Pelegrino\b/g, "Pelé");
	v = v.replace(/\bNelson Pellegrino\b/g, "Pelé");
	v = v.replace(/\bNilmário Miranda\b/g, "Metalúrgico");	
	v = v.replace(/\bOsmar Dias\b/g, "Caim");
	v = v.replace(/\bOtávio Leite\b/g, "Garoto");
	v = v.replace(/\bPablito\b/g, "Calvo");
	v = v.replace(/\bPaes Landim\b/g, "Decrépito");	
	v = v.replace(/\bPaulinho da Força\b/g, "Boa Vista");
	v = v.replace(/\bPaulo Abi Ackel\b/g, "Diamante");
	v = v.replace(/\bPaulo Alexandre Barbosa\b/g, "Babosa");
	v = v.replace(/\bPaulo Bernardo\b/g, "Filósofo");
	v = v.replace(/\bPaulo Bornhausen\b/g, "Filho");	
	v = v.replace(/\bPaulo Câmara\b/g, "Amigo C");
	v = v.replace(/\bPaulo Ferreira\b/g, "Contador");
	v = v.replace(/\bPaulo Garcia\b/g, "Pastor");
	v = v.replace(/\bPaulo Hartung\b/g, "Baianinho");
	v = v.replace(/\bPaulo Henrique Lustosa\b/g, "Educador");
	v = v.replace(/\bPaulo Magalhães Júnior\b/g, "Goleiro");
	v = v.replace(/\bPaulo Magalhaes\b/g, "Goleiro");
	v = v.replace(/\bPaulo Pimenta\b/g, "Montanha");	
	v = v.replace(/\bPaulo Rubem Santiago\b/g, "Bronca");	
	v = v.replace(/\bPCid Gomes\b/g, "Falso");
	v = v.replace(/\bPedro Eugenio\b/g, "Droeu");
	v = v.replace(/\bPedro Eurico\b/g, "Cintinho");	
	v = v.replace(/\bPimenta da Veiga\b/g, "Gordo");
	v = v.replace(/\bPlauto Miró\b/g, "Grosseiro");
	v = v.replace(/\bPSebastiao Almeida\b/g, "Sumido");
	v = v.replace(/\bRandolfe Rodrigues\b/g, "Múmia");
	v = v.replace(/\bRaul Jungmann\b/g, "Bruto");
	v = v.replace(/\bRenan Calheiros\b/g, "Atleta");
	v = v.replace(/\bRenato Casagrande\b/g, "Centroavante");
	v = v.replace(/\bRicardo Ferraço\b/g, "Nulo");
	v = v.replace(/\bRicardo Montoro\b/g, "Macapá");
	v = v.replace(/\bRoberto Freire\b/g, "Curitiba");	
	v = v.replace(/\bRoberto Massafera\b/g, "Ribeirão Preto");
	v = v.replace(/\bRobinson Faria\b/g, "Bonitinho");
	v = v.replace(/\bRobson de Lima Apolinário\b/g, "Crusoé");
	v = v.replace(/\bRodrigo de Castro\b/g, "Castor");
	v = v.replace(/\bRodrigo Garcia\b/g, "Suíça");
	v = v.replace(/\bRodrigo Maia\b/g, "Botafogo");
	v = v.replace(/\bRomero Jucá\b/g, "Caju");
	v = v.replace(/\bRonaldo Caiado\b/g, "Vaqueiro");
	v = v.replace(/\bRonaldo Santini\b/g, "Inferno");
	v = v.replace(/\bRosalba Ciarlini\b/g, "Carrossel");
	v = v.replace(/\bSandro Boka\b/g, "Bocão");	
	v = v.replace(/\bSandro Mabel\b/g, "Biscoito");	
	v = v.replace(/\bSérgio Aquino\b/g, "Pequeno");
	v = v.replace(/\bSérgio Borges\b/g, "Boquinha");	
	v = v.replace(/\bSergio Cabral\b/g, "Proximus");
	v = v.replace(/\bSérgio Cabral\b/g, "Proximus");
	v = v.replace(/\bSérgio Guerra\b/g, "Chorão");
	v = v.replace(/\bTarcísio Caixeta\b/g, "Fósforo");
	v = v.replace(/\bTarcísio Zimmermann\b/g, "Irmao");
	v = v.replace(/\bTiago Correia\b/g, "Alba");
	v = v.replace(/\bTião Viana\b/g, "Menino da floresta");
	v = v.replace(/\bTico Lacerda\b/g, "Teco");
	v = v.replace(/\bValdir Andres\b/g, "Grenal");
	v = v.replace(/\bValdir Raupp\b/g, "Alemão");	
	v = v.replace(/\bVicente Candido\b/g, "Palmas");	
	v = v.replace(/\bVicentinho\b/g, "João Pessoa");
	v = v.replace(/\bWaldir Pires\b/g, "Soneca");	
	v = v.replace(/\bWeliton Prado\b/g, "Fragmentada");
	v = v.replace(/\bWellington Magalhães\b/g, "Aço");	
	v = v.replace(/\bWilma de Faria\b/g, "Cobra");
	v = v.replace(/\bYeda Crusius\b/g, "Balzac");
	v = v.replace(/\bZeca do PT\b/g, "Pescador");
	

	textNode.nodeValue = v;
}


