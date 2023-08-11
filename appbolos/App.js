import { Text, View, StyleSheet, Image, ScrollView, TouchableOpacity} from 'react-native';
export default function App() {

  return (
<View style={styles.container}>

    <View style={styles.cxlogin}>
      <Image style={styles.login}
      resizeMode="contain"
      source={require("./assets/login.png")}/>
    </View>

      <Text style={styles.paragraph}>Catálogo</Text>

  <ScrollView>

    <View style={styles.logoCont}>
      <Image style={styles.logo}
      resizeMode="contain"
      source={require("./assets/logo.png")}/>
    </View>

    <View style={styles.cxfoto}>
      <Image style={styles.img}
      resizeMode="contain"
      source={require("./assets/Bolo1.jpg")}/>
      <Text style={styles.subtitulo}>{'\n'}Choco-Banana Delight{'\n'}</Text>
      <Text style={styles.subtitulo2}> Preço: R$ 18,00 por fatia{'\n'}</Text>
      <Text style={styles.descri}>     Uma deliciosa combinação de banana madura e chocolate amargo, perfeitamente equilibrada para satisfazer seus desejos doces e manter seu estilo de vida saudável.{'\n'}{'\n'}</Text>
      <Text style={styles.tabela}> Tabela Nutricional (por fatia):{'\n'}{'\n'}
      •	Calorias: 150 kcal{'\n'}
      •	Proteínas: 5g{'\n'}
      •	Carboidratos: 25g{'\n'}
      •	Gorduras: 3g{'\n'}
      •	Fibras: 4g{'\n'}
      </Text>

      <View style={styles.cxCont}>
      <Image style={styles.cont}
      resizeMode="contain"
      source={require("./assets/cont.png")}/>
      </View>

    </View>
 

    <View style={styles.cxfoto}>

      <Image style={styles.img}
      resizeMode="center"
      source={require("./assets/Bolo2.png")}/>
      <Text style={styles.subtitulo}>{'\n'}Aveia & Maçã Energy{'\n'}</Text>
      <Text style={styles.subtitulo2}>Preço: R$ 15,50 por fatia{'\n'}</Text>
      <Text style={styles.descri}>     Este bolo de aveia recheado com pedaços suculentos de maçã é uma explosão de energia. Perfeito como um lanche antes do treino ou para matar a fome durante o dia.{'\n'}{'\n'}</Text>
      <Text style={styles.tabela}> Tabela Nutricional (por fatia):{'\n'}{'\n'}
      •	Calorias: 130 kcal{'\n'}
      •	Proteínas: 4,5g{'\n'}
      •	Carboidratos: 20g{'\n'}
      •	Gorduras: 2,5g{'\n'}
      •	Fibras: 3,5g{'\n'}
      </Text>

      <View style={styles.cxCont}>
      <Image style={styles.cont}
      resizeMode="contain"
      source={require("./assets/cont.png")}/>
      </View>

    </View>

 
    <View style={styles.cxfoto}>

      <Image style={styles.img}
      resizeMode="center"
      source={require("./assets/Bolo3.jpg")}/>
      <Text style={styles.subtitulo}>{'\n'}Coco Fit Bliss{'\n'}</Text>
      <Text style={styles.subtitulo2}>Preço: R$ 20,00 por fatia{'\n'}</Text>
      <Text style={styles.descri}>     Desfrute do sabor tropical do coco neste bolo leve e úmido. Uma escolha deliciosa para satisfazer seus desejos por algo doce e saudável.{'\n'}{'\n'}</Text>
      <Text style={styles.tabela}> Tabela Nutricional (por fatia):{'\n'}{'\n'}
      •	Calorias: 160 kcal{'\n'}
      •	Proteínas: 6g{'\n'}
      •	Carboidratos: 22g{'\n'}
      •	Gorduras: 4g{'\n'}
      •	Fibras: 5g{'\n'}
      </Text>

      <View style={styles.cxCont}>
      <Image style={styles.cont}
      resizeMode="contain"
      source={require("./assets/cont.png")}/>
      </View>

    </View>


    <View style={styles.cxfoto}>

      <Image style={styles.img}
      resizeMode="center"
      source={require("./assets/bolo4.png")}/>
      <Text style={styles.subtitulo}>{'\n'}Nozes Power Crunch{'\n'}</Text>
      <Text style={styles.subtitulo2}>Preço: R$ 22,50 por fatia{'\n'}</Text>
      <Text style={styles.descri}>     Um bolo rico em nozes crocantes, que fornecem proteínas e ômega-3 essenciais. Perfeito para dar um impulso energético ao seu dia.{'\n'}{'\n'}</Text>
      <Text style={styles.tabela}> Tabela Nutricional (por fatia):{'\n'}{'\n'}
      •	Calorias: 180 kcal{'\n'}
      •	Proteínas: 7g{'\n'}
      •	Carboidratos: 18g{'\n'}
      •	Gorduras: 8g{'\n'}
      •	Fibras: 3g{'\n'}
      </Text>

      <View style={styles.cxCont}>
      <Image style={styles.cont}
      resizeMode="contain"
      source={require("./assets/cont.png")}/>
      </View>

    </View>

 
    <View style={styles.cxfoto}>

      <Image style={styles.img}
      resizeMode="center"
      source={require("./assets/Bolo5.jpg")}/>
      <Text style={styles.subtitulo}>{'\n'}Morango Vitality{'\n'}</Text>
      <Text style={styles.subtitulo2}>Preço: R$ 17,00 por fatia{'\n'}</Text>
      <Text style={styles.descri}>     Delicie-se com a frescura dos morangos em cada mordida deste bolo. Uma opção deliciosa e saudável para satisfazer seus desejos por sobremesa.{'\n'}{'\n'}</Text>
      <Text style={styles.tabela}> Tabela Nutricional (por fatia):{'\n'}{'\n'}
      •	Calorias: 140 kcal{'\n'}
      •	Proteínas: 5,5g{'\n'}
      •	Carboidratos: 23g{'\n'}
      •	Gorduras: 3,5g{'\n'}
      •	Fibras: 4g{'\n'}
      </Text>

      <View style={styles.cxCont}>
      <Image style={styles.cont}
      resizeMode="contain"
      source={require("./assets/cont.png")}/>
      </View>

    </View>


    <View style={styles.cxfoto}>
      <Image style={styles.img}
      resizeMode="center"
      source={require("./assets/Bolo6.jpg")}/>
      <Text style={styles.subtitulo}>{'\n'}Cenoura & Noz-Moscada{'\n'}Fit Delight{'\n'}</Text>
      <Text style={styles.subtitulo2}>Preço: R$ 16,50 por fatia{'\n'}</Text>
      <Text style={styles.descri}>     Uma combinação clássica de cenoura e noz-moscada em um bolo nutritivo e saboroso. Ideal para quem busca um toque de nostalgia saudável.{'\n'}{'\n'}</Text>
      <Text style={styles.tabela}> Tabela Nutricional (por fatia):{'\n'}{'\n'}
      •	Calorias: 150 kcal{'\n'}
      •	Proteínas: 6g{'\n'}
      •	Carboidratos: 19g{'\n'}
      •	Gorduras: 4,5g{'\n'}
      •	Fibras: 3g{'\n'}
      </Text>

      <View style={styles.cxCont}>
      <Image style={styles.cont}
      resizeMode="contain"
      source={require("./assets/cont.png")}/>
      </View>

    </View>


    <View style={styles.cxfoto}>
      <Image style={styles.img}
      resizeMode="center"
      source={require("./assets/Bolo7.jpg")}/>
      <Text style={styles.subtitulo}>{'\n'}Abacate & Limão Freshness{'\n'}</Text>
      <Text style={styles.subtitulo2}>Preço: R$ 19,00 por fatia{'\n'}</Text>
      <Text style={styles.descri}>     Surpreenda seu paladar com a combinação única de abacate cremoso e limão refrescante. Um bolo que é um verdadeiro deleite para os sentidos.{'\n'}{'\n'}</Text>
      <Text style={styles.tabela}> Tabela Nutricional (por fatia):{'\n'}{'\n'}
      •	Calorias: 170 kcal{'\n'}
      •	Proteínas: 4,5g{'\n'}
      •	Carboidratos: 24g{'\n'}
      •	Gorduras: 6g{'\n'}
      •	Fibras: 4,5g{'\n'}
      </Text>


      <View style={styles.cxCont}>
      <Image style={styles.cont}
      resizeMode="contain"
      source={require("./assets/cont.png")} />
      </View>

    </View>


    <View style={styles.cxdoBotao}>
      <TouchableOpacity style={styles.botao}>
      <Text style={styles.textoBotao}>Finalizar Pedido</Text>
      </TouchableOpacity>
    </View>

    <View style={styles.linha} />

    <Text style={styles.textoFim}> © 2023 Qualquer Coisa Inc. Nenhum direito reservado. Foi atividade da escola ™️ </Text>

  </ScrollView>
</View>
  );
}


const styles = StyleSheet.create({

container:{
  flex: 1,
  backgroundColor: '#fdb5ff',
  justifyContent: 'center',
  alignItems: 'center',
},
  
cxlogin:{
  flex: 1,
  paddingTop: 50,
  justifyContent: 'center',
},

login:{
  width: 200,
  height: 200,
  marginLeft: 200
},

logoCont:{
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  paddingTop: 25
},

logo:{
  width: 300,
  height: 200,
  padding: 10,
},

paragraph: {
  marginTop: 19,
  fontSize: 20,
  fontWeight: 'bold',
  textAlign: 'center',
  paddingTop: 10
},

cxfoto:{
  flex: 1,
  backgroundColor: '#af4e9f',
  margin: 40,
  justifyContent: 'center',
  padding: 20,
  alignItems: "center",
  borderRadius: 15,
  width: 320,
},

img:{
  width: 300,
  height: 200,
  borderRadius: 8,
  padding: 10,
  marginTop: 5,
},

subtitulo:{
  fontSize: 20,
  fontWeight: 'bold',
  color: '#f6f2ef'
},

subtitulo2:{
  backgroundColor: '#fdb5ff',
  paddingTop: 20,
  fontSize: 15,
  padding: 7,
  borderRadius: 20,
  marginBottom: 20,
  textAlign: 'justify'
},

descri:{
  color: '#f6f2ef',
  textAlign: 'justify',
  lineHeight: 24
},

tabela:{
  flex: 1,
  backgroundColor: '#fdb5ff',
  justifyContent: 'center',
  alignItems: 'center',
  padding: 10,
  borderRadius: 20
},

cxCont:{
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center'
},

cont:{
  width: 300,
  height: 200
},

cxdoBotao:{
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  marginBottom: 12
},

botao:{
  backgroundColor: '#ff00d7',
  padding: 15,
  borderRadius: 8
},

textoBotao:{
  color: '#f6f2ef',
  fontSize: 18,
  fontWeight: 'bold',
  fontFamily: 'Roboto'
},

linha:{
  borderBottomColor: 'black',
  borderBottomWidth: 1,
  marginVertical: 15,
},

textoFim: {
  fontSize: 10,
  fontWeight: 'bold',
},

});