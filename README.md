Lab 2. React – Native – Fundamentals 
Phần 1. Các Projects Cơ Bản 
Project 1. Hello world 
  
Link kham khảo:  
•	React Native View Docs 
•	React Native Text Docs 
 
Hướng dẫn: 
Bước 1. Khởi tạo project 
  
  
Start project với Android emulator ( Đã cài đặt) 
  
Nhấn a để chạy với android. 
 
Bước 2. Import các component cần thiết. 
  
Bước 3. Thiết kết giao diện 
Tạo function trả về view (JSX) của App 
  
•	Chú ý tuân thủ cú pháp của JSX (XML) chỉ có 1 component  (Element) tổng chứa tất cả các component con. 
•	Code ES6 trong JSX đặt trong cặp dấu{} 
  
Export default component chính (App) 
  
Bước 4. Thiết kế style 
  
Bước 5. Hiệu chỉnh tạo và sử dụng style với hàm StyleSheet.create() 
Import StyleSheet 
  
Tạo MyStyle 
  
Sử dụng style trong comopnent 
  
 
Project 2. Capturing Taps 
Xây dựng project với button khi nhấn vào hiển thị thông báo với allert “hello” 
  
Link tham khảo 
•	React Native Button Docs 
•	React Native TouchableOpacity Docs 
Hướng dẫn 
  
Hiệu chỉnh 
  
 
  
 
Hiệu chỉnh tạo và sử dụng style với hàm StyleSheet.create() 
  
 
  
 
Project 3. Custom Component 
Tạo component Button với TouchableOpacity và Text với 2 props truyền vào là text, hàm xử lý sự hiện _onPress và buttonStyle truyền vào từ component cha. 
   
Hướng dẫn code 
  
  
 
Project 4. State & Props 
Props: cho phép component truyền khởi tạo giá trị cho các properties ban ầu của component và không thay đổi trong quá trình thức thi. 
State: hoạt động tương tự như props, cũng khởi tạo giá trị ban ầu cho các component nhưng có thể thay đổi theo tác động của người dùng. 
•	Using the State Hook 
•	Introducing Hooks 
 
 
  
Hướng dẫn code 
  
Project 5. Styling 
•	StyleSheet API Documentation • Layout with Flexbox 
  
Hướng dẫn code 
import React from "react"; 
import { View, Text, StyleSheet } from "react-native"; 
 const styles = StyleSheet.create({   container: {     flex: 1, 
    alignItems: "center",     flexDirection: "row", 
    justifyContent: "space-around", 
  },   box: {     width: 100,     height: 100, 
    justifyContent: "center",     alignItems: "center", 
  }, 
});  const Square = ({ text, bgColor = "#7ce0f9" }) => ( 
  <View style={[styles.box, { backgroundColor: bgColor }]}> 
    <Text>{text}</Text> 
  </View> 
);  export default () => {   return ( 
    <View style={styles.container}> 
      <Square text="Square 1" /> 
      <Square text="Square 2" bgColor="#4dc2c2" /> 
      <Square text="Square 3" bgColor="#ff637c" /> 
    </View> 
  ); 
}; 
 
 
Project 6. Scrollable Content 
•	ScrollView Docs 
•	Explained: Each child in a list should have a unique "key" prop. 
 
  
import React from "react"; import { View, Text, StyleSheet, ScrollView } from "react-native"; 
 const styles = StyleSheet.create({   container: { backgroundColor: "#fff" },   box: {     width: 100,     height: 100,     justifyContent: "center",     alignItems: "center",     margin: 20, 
  }, 
});  const Square = ({ text, bgColor = "#7ce0f9" }) => ( 
  <View style={[styles.box, { backgroundColor: bgColor }]}> 
    <Text>{text}</Text> 
  </View> 
);  const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]; 
 export default () => {   return ( 
    <ScrollView style={styles.container}> 
      {data.map((item, index) => ( 
        <Square key={item} text={`Square ${index + 1}`} /> 
      ))} 
    </ScrollView> 
  ); 
}; 
 
 
Project 7. Building a Form 
•	TextInput Docs 
 
  
Hướng dẫn code 
import React, { useState } from "react"; import { TextInput, Text, View, StyleSheet, Button } from "react-native"; 
 
const styles = StyleSheet.create({   container: {     padding: 20, 
  },   label: {     fontWeight: "bold",     fontSize: 18, 
  },   input: {     marginTop: 10,     backgroundColor: "rgba(0, 0, 0, 0.1)",     padding: 10,     borderRadius: 5, 
  }, 
});  export default () => {   const [name, setName] = useState(""); 
 
  return ( 
    <View style={styles.container}> 
      <Text style={styles.label}>What is your name?</Text> 
      <TextInput         style={styles.input}         placeholder="John Doe"         placeholderTextColor="rgba(0, 0, 0, 0.5)"         onChangeText={(text) => setName(text)}         value={name} 
      />       <Button         title="Say Hello"         onPress={() => {           alert(`Hello, ${name}!`);           setName(""); 
        }} 
      /> 
    </View> 
  ); 
}; 
 
 
Project 8. Long Lists 
•	FlatList 
•	SectionList 
 
   
import React from "react"; import { 
  SectionList, 
  Text, 
  View, 
  StyleSheet, 
  SafeAreaView, 
} from "react-native"; 
 const styles = StyleSheet.create({   row: { 
    paddingHorizontal: 10,     paddingVertical: 10, 
  },   name: { 
    fontSize: 16, 
  }, 

  separator: {     backgroundColor: "rgba(0, 0, 0, 0.5)",     height: 1, 
  },   sectionHeader: {     paddingHorizontal: 10,     paddingVertical: 10,     backgroundColor: "rgb(170, 170, 170))", 
  }, 
});  const groupPeopleByLastName = (_data) => {   const data = [..._data];   const groupedData = data.reduce((accumulator, item) => {     const group = item.name.last[0].toUpperCase(); 
     if (accumulator[group]) {       accumulator[group].data.push(item); 
    } else {       accumulator[group] = {         title: group,         data: [item], 
      }; 
    }      return accumulator; 
  }, {}); 
   const sections = Object.keys(groupedData).map((key) => {     return groupedData[key]; 
  });  
  return sections.sort((a, b) => {     if (a.title > b.title) {       return 1; 
    } 
    return -1; 
  }); 
};  export default () => {   return ( 
    <SafeAreaView>       <SectionList         sections={groupPeopleByLastName(PEOPLE)} 

        keyExtractor={(item) => `${item.name.first}-${item.name.last}`}         renderSectionHeader={({ section }) => {           return ( 
            <View style={styles.sectionHeader}> 
              <Text>{section.title}</Text> 
            </View> 
          );         }}         renderItem={({ item }) => {           return ( 
            <View style={styles.row}> 
              <Text style={styles.name}> 
                {item.name.first} {item.name.last} 
              </Text> 
            </View> 
          ); 
        }} 
        ItemSeparatorComponent={() => <View style={styles.separator} />} 
      /> 
    </SafeAreaView> 
  ); 
};  const PEOPLE = [ 
  {     name: {       title: "Ms",       first: "Maeva",       last: "Scott", 
    }, 
  },   {     name: {       title: "Ms",       first: "Maëlle",       last: "Henry", 
    }, 
  },   {     name: {       title: "Mr",       first: "Mohamoud",       last: "Faaij", 
    }, 
  }, 
]; 
 
 
