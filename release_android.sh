#!/bin/bash
apkEnv=$1
apkVersao=$2
releaseFolder="./releases/"

releaseFile="${releaseFolder%%/}/devry-calc-${apkVersao}.apk"

echo "- - - - - - - - - - - - - - - - - - - - - -"
echo "Release Android ${apkVersao}"
echo "- - - - - - - - - - - - - - - - - - - - - -"


if [ ! -d $releaseFolder ]
then
  mkdir $releaseFolder
fi


if [ -e $releaseFile ]
then
  echo "Removendo a versão anterior deste mesmo release ${releaseFile}"
  rm $releaseFile
fi

echo "cordova build android --release"
ionic build android --release --$apkEnv

jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore key/devry-calc.keystore -storepass 0p9o8i7u -keypass 0p9o8i7u platforms/android/build/outputs/apk/android-release-unsigned.apk devry_calc
jarsigner -verify -verbose -certs platforms/android/build/outputs/apk/android-release-unsigned.apk
${ANDROID_HOME%%/}/build-tools/24.0.3/zipalign -v 4 platforms/android/build/outputs/apk/android-release-unsigned.apk $releaseFile

echo

if [ -e $releaseFile ]
then
  echo -e "\033[1;32mRelease gerado com sucesso\033[0m"
  echo -e "\033[1;32m${releaseFile}\033[0m"
else
  echo -e "\033[1;31mOcorreu um erro ao tentar gerar o relase\033[0m"
  echo -e "\033[1;31m${releaseFile}\033[0m"
fi

echo
echo "- - - - - - - - - - - - - - - - - - - - - -"
echo
