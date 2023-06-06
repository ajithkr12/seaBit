import React from 'react';
import {Document,Page,View,Text,Link,Font,StyleSheet,} from '@react-pdf/renderer';
import { Rotate90DegreesCcw } from '@mui/icons-material';


// Font.register({
//   family: 'Oswald',
//   src: 'https://fonts.gstatic.com/s/oswald/v13/Y_TKV6o8WovbUd3m_X9aAA.ttf',
// });



const PDFExport= (props) => {
  const times = 24;
  const timeSplit = 48;
return(
  <Document>
  <Page size="A4" style={styles.page}>
  <View style={styles.main}>
    <View style={styles.header}>
    <Text style={styles.titleName}>Attendence Register</Text>
    </View>
  <View style={styles.employeeContainer}>
  <Text style={styles.subtitle}>Employee ID/Name : AHKR12786/Santhosh</Text>
  <Text style={styles.subtitle}>Post ID/Name : PS123/Navigator</Text>
  <Text style={styles.subtitle}>Device ID/Name : D1b279876</Text>
  </View>
  <View style={styles.table}> 

  <View style={styles.tableRow}> 

    <View style={styles.tableColBig}> 
      <Text style={styles.tableCell}>Product</Text> 
    </View> 
    <View style={styles.tableColBig}> 
      <Text style={styles.tableCell}>Date</Text> 
    </View> 
    {Array.from({ length: times }).map((_, index) => (
      <View style={styles.tableColSmall} key={index}> 
        <Text style={styles.tableCell}>{index+1}</Text> 
      </View> 
    ))}

    <View style={styles.tableColBig}> 
      <Text style={styles.tableCell}>Hours of Work</Text> 
    </View> 
    <View style={styles.tableColBig}> 
      <Text style={styles.tableCell}>Hours of Rest</Text> 
    </View> 
  </View>
  {/* zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz */}
 
  <View style={styles.tableRow}> 

    <View style={styles.tableColBig}> 
      <Text style={styles.tableCell}>sgt</Text> 
    </View> 
    <View style={styles.tableColBig}> 
      <Text style={styles.tableCell}>12/052023</Text> 
    </View> 
    {Array.from({ length: timeSplit }).map((_, index) => (
      <View style={styles.tableColMini} key={index}> 
        <Text style={styles.tableCell}></Text> 
      </View> 
    ))}

    <View style={styles.tableColBig}> 
      <Text style={styles.tableCell}>8.5 Hours</Text> 
    </View> 
    <View style={styles.tableColBig}> 
      <Text style={styles.tableCell}>15.5 Hours</Text> 
    </View> 
  </View> 
  {/* zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz */}

</View>
</View>
  </Page>
</Document>
)
};
export default PDFExport;


// Create styles
const styles = StyleSheet.create({
  page: {
    backgroundColor: '#FFFFFF',
    padding: 10,
    // margin:20,
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    width:'100%',
    height:'100%',
  },

  main:{
    transform: 'rotate(270deg)',
  },
  header:{
    marginBottom: 10,
    display:'flex',
    justifyContent:'center'
  },
  titleName: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  employeeContainer:{
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    marginVertical:10,
  },
  subtitle:{
    fontSize:12,
  },

  table: { 
    display: "table", 
    width: "auto", 
    borderStyle: "solid", 
    borderWidth: 1, 
    borderRightWidth: 0, 
    borderBottomWidth: 0 ,

  }, 
  tableRow: { 
    // margin: "auto", 
    flexDirection: "row" 
  }, 
  tableColMini: { 
    width: "2%", 
    borderStyle: "solid", 
    borderWidth: 1, 
    borderLeftWidth: 0, 
    borderTopWidth: 0 ,
    display:'flex',
    flexWrap: 'nowrap',
    backgroundColor:'red'
  },
  tableColSmall: { 
    width: "4%", 
    borderStyle: "solid", 
    borderWidth: 1, 
    borderLeftWidth: 0, 
    borderTopWidth: 0 ,
    display:'flex',
    flexWrap: 'nowrap',
    justifyContent:'center',
    alignItems:'center',
  }, 
  tableColBig: { 
    width: '10%', 
    height:34,
    borderStyle: "solid", 
    borderWidth: 1, 
    borderLeftWidth: 0, 
    borderTopWidth: 0 ,
    display:'flex',
    flexWrap: 'nowrap',
    justifyContent:'center',
    alignItems:'center',
  }, 
  tableCell: { 
    fontSize: 10,
    // marginHorizontal:8 
  }
});