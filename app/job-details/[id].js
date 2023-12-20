import { Stack , useRouter , useSearchParams } from "expo-router";
import { useCallback , useState } from "react";
import { View , Text , SafeAreaView , ScrollView , ActivityIndicator , RefreshControll } from 'react-native';
import { Company , JobAbout , JobFooter , JobTabs , ScreenHeaderbtn , Specifics } from '../../components';
import { COLORS , icons , SIZES } from '../../constants';
import { useFetch } from '../../hook/useFetch';

const JobDetails= () => {
  return (
    <Text>JobDetails</Text>
  )
}

export default JobDetails