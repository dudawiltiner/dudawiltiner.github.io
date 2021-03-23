


function quant(value,id){
   var check = document.getElementById(id);
   var resul = value +'resul'
   if(check.checked==true){
   document.getElementById(value).innerHTML = '<table class="tav"  >' +
   '<tr>'+
   '<td>'+
       '<div class="icon3" >'+
           '<button class="icon3" onclick="menos(id,value)" id="'+ value + 're"' + 'value=' + value+'>'+
            '<b>'+
           '-'+ '</b>'
           +'</button>'+
       '</div>'+
  '</td>'+
  '<td>'+
       '<div class="sju">'+
          '<p class="text45"  id='+ resul +'>'+
       '</div>'+
  '</td>'+
   '<td>'+
   '<div class="icon2" >'+
   '<button class="icon2" onclick="mais(id,value)" id="'+ value + 'res"' + 'value=' + value + '>'+
    '<b>'+
   '+'+ '</b>'
   +'</button>'+
'</div>'+
   '</td> '+      
   '</tr>'+
'</table>';
document.getElementById(resul).value = 1;
document.getElementById(resul).innerHTML = document.getElementById(resul).value
tab(value)
   }else{
      document.getElementById(value).innerHTML = ''
      var node = document.getElementById(value+'tab0');
      if (node.parentNode) {
      node.parentNode.removeChild(node);
      }
      total()

   }
   }

function mais(id,value){
   var ide= id + 'ul'
   document.getElementById(ide).value += 1;
   document.getElementById(ide).innerHTML = document.getElementById(ide).value
   document.getElementById(ide+'tab3').innerHTML = document.getElementById(ide).value
   var idr = value.split("1")[0]
   var ol = document.getElementById(idr+'6').innerHTML
   var olconv= parseFloat(ol)
   var quant = document.getElementById(ide).value
   var quantconv= parseFloat(quant)
   var mult = olconv*quantconv
   var mul = round(mult, 2)
   var multconv = mul.toString();
   document.getElementById(ide+'tab4').innerHTML = multconv
   total()



}

function menos(id,value){
   var ida = id + 'sul'
   if (document.getElementById(ida).value==1){
      document.getElementById(ida).value=1
    
   }else{
      document.getElementById(ida).value-=1
      document.getElementById(ida).innerHTML = document.getElementById(ida).value
      document.getElementById(ida+'tab3').innerHTML = document.getElementById(ida).value
      var idr = value.split("1")[0]
      var ol = document.getElementById(idr+'6').innerHTML
      var olconv= parseFloat(ol)
      var quant = document.getElementById(ida).value
      var quantconv= parseFloat(quant)
      var mult = olconv*quantconv
      var mul = round(mult, 2)
      var multconv = mul.toString();
      document.getElementById(ida+'tab4').innerHTML = multconv
      total()

      
   } 
}

function tab(value){
   var id = value.split("1")[0]
   var nom = document.getElementById(id+'5').innerHTML
   var ol = document.getElementById(id+'6').innerHTML
   var olconv= parseFloat(ol)
   var resul = value +'resul'
   var quant = document.getElementById(resul).value
   var quantconv= parseFloat(quant)
   var mult = olconv*quantconv
   var mul = round(mult, 2)
   var multconv = mul.toString();
   document.getElementById("tabss").innerHTML+= 
  '<tr class="trq" id='+value+'tab0'+ '>'+
  '<td id='+value+'tab1'+'><p>' + nom + '</p></td>'+
  '<td id='+value+'tab2'+'><p>'+ ol + '</p></td>'+
  '<td><p id='+resul+'tab3'+ '>' + quant + '</p></td>'+
  '<td><p id='+resul+'tab4'+ '>' + multconv +'</p></td>'+
  '</tr>';

   total()

}

const round = (num, places) => {
	if (!("" + num).includes("e")) {
		return +(Math.round(num + "e+" + places)  + "e-" + places);
	} else {
		let arr = ("" + num).split("e");
		let sig = ""
		if (+arr[1] + places > 0) {
			sig = "+";
		}

		return +(Math.round(+arr[0] + "e" + sig + (+arr[1] + places)) + "e-" + places);
	}
}

function total(){
   var fim = 0.00
   var list=[]
   var x=document.getElementById('tabss').children.length
   console.log(x)
   for (var i = 0; i < x; i++) {
      var va = document.getElementById('tabss').children[i].children[3].children[0].id
      console.log(va)
      var jus = document.getElementById(va).innerHTML
      console.log(jus)
      var hei = parseFloat(jus)
      fim += hei
      console.log(fim)
      list.push(va)
      if(list.length==x){
         var fia = round(fim, 2)
         document.getElementById("fi").innerHTML = fia
      }

   }


}

function envia(){
   var nom= document.getElementById("nome").value
   var end= document.getElementById("ender").value
   if(end==""){
      document.getElementById("ale").innerHTML="Por favor, digite o seu endereço antes de enviar o pedido.";
   }else{
   if(nom==""){
      document.getElementById("alert").innerHTML="Por favor, digite o seu nome antes de enviar o pedido.";
   }else{
      var list=[]
      var umcom= 'https://web.whatsapp.com/send?l=pt-BR&text=%0A%F0%9F%8D%89%F0%9F%8D%87%F0%9F%8D%8B%F0%9F%8D%86%F0%9F%A5%91%F0%9F%A5%A6%F0%9F%8D%92%F0%9F%8C%B6%EF%B8%8F%F0%9F%A5%9D%F0%9F%8D%8D%F0%9F%8D%8E%F0%9F%8D%89%F0%9F%8D%87'
      var umfim = '!'
      var x=document.getElementById('tabss').children.length
      var client = document.getElementById("nome").value
      var clientnam= client.replaceAll(" ", "%20")
      var rep = ""
      var inimsg=umcom + '%0A%0AOl%C3%A1%2C%20meu%20nome%20é%20' + '*'+clientnam+'*' + umfim+ '%0A%0AEu%20gostaria%20de%20comprar%20da%20HortiFruti%3A%0A%0A%20' 
      for (var i = 0; i < x; i++) {
         var nam = document.getElementById('tabss').children[i].children[0].children[0].innerHTML
         var namconv = nam.replaceAll(" ", "%20")
         var val = document.getElementById('tabss').children[i].children[3].children[0].innerHTML
         val.toString()
         var qtd = document.getElementById('tabss').children[i].children[2].children[0].innerHTML
         qtd.toString()
         list.push(nam)
         var comnom = '%C2%B0%20%20'
         var comt='%20-%20'
         var fimnom = '%20---%20R%24%20'
         var terumk = '%0A%20'
         rep += comnom + qtd + comt + namconv + fimnom + val + terumk
         console.log(rep)
         if(list.length==x){
            var tot = '%0A*Total%20da%20compra*%3A%20R%24%20'
            var final = '%0A%0A%F0%9F%8D%89%F0%9F%8D%87%F0%9F%8D%8B%F0%9F%8D%86%F0%9F%A5%91%F0%9F%A5%A6%F0%9F%8D%92%F0%9F%8C%B6%EF%B8%8F%F0%9F%A5%9D%F0%9F%8D%8D%F0%9F%8D%8E%F0%9F%8D%89%F0%9F%8D%87%F0%9F%8D%8B&phone=5571981073007'
            var total=document.getElementById("fi").innerHTML
            total.toString()
            var en = end.replaceAll(" ","%20")
            var enfim = '%0A'+ '%0A'+ '*Endereço*' + '%3A%20' + en + '%20'
            var msgfim = inimsg + rep + tot + total + enfim + final
            window.open(msgfim);
         }
         
      }
   }

   }

}

function inr(){
   document.getElementById("alert").innerHTML=""

}
function iny(){
   document.getElementById("ale").innerHTML=""

}

function whats(){
   window.open('https://web.whatsapp.com/send?l=pt-BR&phone=5571981073007&text=Ol%C3%A1%2C%20HortiFruti!%20%F0%9F%8D%89%F0%9F%8D%8C%F0%9F%8D%87%F0%9F%8D%93%F0%9F%8D%8D%F0%9F%8C%B6%EF%B8%8F%F0%9F%A5%92%0A%0AEu%20vi%20o%20seu%20site%20e%20gostaria%20de%20saber%20mais%20sobre%20os%20seus%20servi%C3%A7os.%0A%0APoderia%20me%20dar%20mais%20informa%C3%A7%C3%B5es%3F%F0%9F%98%8A');

}

function insta(){
   window.open('https://instagram.com/hortifrutinm_?igshid=vlkzgvkliv24');

}

function doar(){
   window.open('https://web.whatsapp.com/send?l=pt-BR&phone=5571981073007&text=Ol%C3%A1%2C%20HortiFruti!%20%F0%9F%8D%89%F0%9F%8D%8C%F0%9F%8D%87%F0%9F%8D%93%F0%9F%8D%8D%F0%9F%8C%B6%EF%B8%8F%F0%9F%A5%92%0A%0AEu%20vi%20sobre%20a%20%20*Campanha%20da%20Cesta%20Solid%C3%A1ria*%20%20%F0%9F%A7%BA%E2%9D%A4%EF%B8%8F%20%20no%20seu%20site%20e%20gostaria%20de%20contribuir%20com%20uma%20doa%C3%A7%C3%A3o.%0A%0APoderia%20me%20dar%20mais%20informa%C3%A7%C3%B5es%3F%F0%9F%98%8A')
}