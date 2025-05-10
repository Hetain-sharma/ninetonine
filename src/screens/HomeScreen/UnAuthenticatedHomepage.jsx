import React from 'react';
import {
  View,
  ScrollView,
  StyleSheet,
  StatusBar,
  ActivityIndicator,
} from 'react-native';
import COLORS from '../../constants/color';
import {
  useGetBannersQuery,
  useGetBlogsQuery,
  useGetCategorysQuery,
  useGetEventsQuery,
  useGetUspsQuery,
} from '../../redux/api/apiSlice';
import Header from '../../components/UnRegisteredComponents/HomepageComponents/Header';
import BannerCarousel from '../../components/UnRegisteredComponents/HomepageComponents/banner/Banner';
import {SchoolTypeSection} from '../../components/UnRegisteredComponents/HomepageComponents/schoolTypeSection/SchoolTypeSection';
import AgeSection from '../../components/UnRegisteredComponents/HomepageComponents/ageSection/AgeSection';
import {FeaturedServices} from '../../components/UnRegisteredComponents/HomepageComponents/featuredServices/FeaturedServices';
import EventsCard from '../../components/UnRegisteredComponents/HomepageComponents/EventsAndActivities/EventsCard';
import SkillPage from '../../components/UnRegisteredComponents/HomepageComponents/LifeSkills/skillPage';
import SkillCard from '../../components/UnRegisteredComponents/HomepageComponents/Learning/SkillCard';
import QuizCard from '../../components/UnRegisteredComponents/HomepageComponents/Quiz/QuizCard';
import UpSkilling from '../../components/UnRegisteredComponents/HomepageComponents/upSkills/UpSkilling';
import YourChild from '../../components/UnRegisteredComponents/HomepageComponents/YourChild/YourChild';

const UnAuthenticatedHomePage = () => {
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
      <View style={styles.container}>
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
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    padding: 0,
    marginBottom: 80,
  },
  innerContainer: {
    backgroundColor: COLORS.white,
  },
  scrollView: {
    padding: 10,
  },
});

export default UnAuthenticatedHomePage;
