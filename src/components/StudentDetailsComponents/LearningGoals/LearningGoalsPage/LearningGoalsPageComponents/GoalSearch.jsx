import {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  FlatList,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/MaterialIcons';

const GoalSearch = ({goals, onAddGoal}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState('All');

  const filters = ['All', 'Cognitive', 'Motor', 'Social', 'Language'];

  // Function to filter goals based on active filter and search query
  const filteredGoals = goals.filter(goal => {
    const matchesFilter =
      activeFilter === 'All' || goal.category === activeFilter;
    const matchesSearch =
      goal.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      goal.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  // Render a single goal item
  const renderGoalItem = ({item}) => (
    <View style={styles.goalCard}>
      <View style={styles.goalContent}>
        <View style={styles.iconContainer}>
          <Icon name="star" size={24} color="#000" />
        </View>
        <View style={styles.goalInfo}>
          <Text style={styles.goalTitle}>{item.title}</Text>
          <Text style={styles.goalDescription}>{item.description}</Text>
        </View>
      </View>
      <TouchableOpacity
        style={styles.addGoalButton}
        onPress={() => onAddGoal(item)}>
        <Text style={styles.addGoalButtonText}>Add Goal</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <Icon name="search" size={20} color="#666" style={styles.searchIcon} />
        <TextInput
          style={styles.searchInput}
          placeholder="goals..."
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
      </View>

      {/* Filter Tabs */}
      <View style={styles.filterContainer}>
        {filters.map(filter => (
          <TouchableOpacity
            key={filter}
            style={[
              styles.filterTab,
              activeFilter === filter && styles.activeFilterTab,
            ]}
            onPress={() => setActiveFilter(filter)}>
            <Text
              style={[
                styles.filterText,
                activeFilter === filter && styles.activeFilterText,
              ]}>
              {filter}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Goals List */}
      <FlatList
        data={filteredGoals}
        renderItem={renderGoalItem}
        keyExtractor={(item, index) => `goal-${index}`}
        contentContainerStyle={styles.goalsList}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: 8,
    paddingHorizontal: 12,
    marginBottom: 16,
    height: 40,
  },
  searchIcon: {
    marginRight: 8,
  },
  searchInput: {
    fontFamily: 'Poppins-Regular',
    fontSize: 12,
  },
  filterContainer: {
    flexDirection: 'row',
    marginBottom: 16,
    flexWrap: 'wrap',
  },
  filterTab: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
    marginRight: 8,
    marginBottom: 8,
    backgroundColor: '#F5F5F5',
  },
  activeFilterTab: {
    backgroundColor: '#4B56D2',
  },
  filterText: {
    fontSize: 14,
    color: '#000',
    fontFamily: 'Poppins-Regular',
  },
  activeFilterText: {
    color: '#fff',
    fontWeight: '500',
    fontFamily: 'Poppins-Regular',
  },
  goalsList: {
    paddingBottom: 16,
  },
  goalCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#E0E0E0',
  },
  goalContent: {
    flexDirection: 'row',
    marginBottom: 12,
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#E6E6FA',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  goalInfo: {
    flex: 1,
  },
  goalTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 4,
    fontFamily: 'Poppins-Regular',
  },
  goalDescription: {
    fontSize: 14,
    color: '#666',
    fontFamily: 'Poppins-Regular',
  },
  addGoalButton: {
    alignSelf: 'flex-end',
    backgroundColor: '#4B56D2',
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  addGoalButtonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '500',
    fontFamily: 'Poppins-Regular',
  },
});

export default GoalSearch;
