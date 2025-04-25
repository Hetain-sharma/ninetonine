import React from 'react';
import {
  View,
  ScrollView,
  StyleSheet,
  StatusBar,
  ActivityIndicator,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Header from '../components/HomepageComponents/Header';
import BannerCarousel from '../components/HomepageComponents/banner/Banner';
import {SchoolTypeSection} from '../components/HomepageComponents/schoolTypeSection/SchoolTypeSection';
import AgeSection from '../components/HomepageComponents/ageSection/AgeSection';
import {FeaturedServices} from '../components/HomepageComponents/featuredServices/FeaturedServices';
import SkillCard from '../components/HomepageComponents/Learning/SkillCard';
import EventsCard from '../components/HomepageComponents/EventsAndActivities/EventsCard';
import SkillPage from '../components/HomepageComponents/LifeSkills/skillPage';
import QuizCard from '../components/HomepageComponents/Quiz/QuizCard';
import UpSkilling from '../components/HomepageComponents/upSkills/UpSkilling';
import YourChild from '../components/HomepageComponents/YourChild/YourChild';
import COLORS from '../constants/color';
import {
  useGetBannersQuery,
  useGetBlogsQuery,
  useGetCategorysQuery,
  useGetEventsQuery,
  useGetUspsQuery,
} from '../redux/api/apiSlice';

const HomePage = () => {
  const banners = useGetBannersQuery();
  const usps = useGetUspsQuery();
  const blogs = useGetBlogsQuery();
  const events = useGetEventsQuery();
  const categorys = useGetCategorysQuery();

  if (
    banners.isLoading ||
    usps.isLoading ||
    blogs.isLoading ||
    events.isLoading ||
    categorys.isLoading
  )
    return <ActivityIndicator size="large" color="blue" />;

  console.log('Banners:', banners.data);
  console.log('USPs:', usps.data);
  console.log('Blogs:', blogs.data);
  console.log('Events:', events.data);
  console.log('Categories:', categorys.data);
  return (
    <>
      <StatusBar backgroundColor={'#FFFFFF'} barStyle="dark-content" />
      <SafeAreaView style={styles.container}>
        <View style={styles.innerContainer}>
          <Header />
          <ScrollView
            style={styles.scrollView}
            showsVerticalScrollIndicator={false}
            keyboardShouldPersistTaps="handled">
            <BannerCarousel />
            <SchoolTypeSection />
            <AgeSection />
            <FeaturedServices />
            <EventsCard />
            <SkillPage />
            <SkillCard />
            <YourChild />
            <QuizCard />
            <UpSkilling />
          </ScrollView>
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    padding: 0,
  },
  innerContainer: {
    backgroundColor: COLORS.white,
  },
  scrollView: {
    padding: 10,
  },
});

export default HomePage;
