# Melhor Saúde 2020
> Aplicativo em React-Native-Cli para Android SDK 29. 

### Vídeo Demonstrativo
- **[Video Beta 0.1](https://www.youtube.com/watch?v=7ttV8G1XVRc)**


## Requisitos:
- Android Studio 
- SDK Android 29
- Node 14^
- JDK 8^

## Webservice
Para alimentação eficiente do aplicativo foi desenvolvido uma Webservice(API) padrão RESTFul com retornos em JSON, por onde é possível buscar todos os dados a serem apresentados em tela.
- **[Repositório GIT da API](https://github.com/urnauzao/melhor-saude-webservice)** 
A mesma se encontra hospeda e em execução na cloud Heroku, para acessa-la **[clique aqui](https://melhor-saude-webservice.herokuapp.com)**





## Instalação:
 - Para instalar basta primeiro clonar nosso repósitório.
 - Acessar a pasta onde está o repositório
 - Abra um terminal schell script nesta pasta
 - Executar:
> npm install
 
 -- Se ocorrer erros, verifique o tópico ERROS COMUNS deste READ.ME
 
 - Se tudo ocorrer bem, o proximo comando já irá iniciar o aplicativo:
 > npx react-native run-android

## Erros Comuns:
 - Ao rodar o comando de inicialização do projeto pela primeira vez após ter clonado do repositório, o seguinte erro pode ser exibido: "Task :app:generateDebugBuildConfig FAILED", se isso ocorrer execute:
> cd android
> ./gradlew clean

