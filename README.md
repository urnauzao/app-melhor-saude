# Melhor Saúde 2020
> Aplicativo em React-Native-Cli para Android SDK 29. 

## Requisitos:
- Android Studio 
- SDK Android 29
- Node 14^
- JDK 8^

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

