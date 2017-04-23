
// creates empty array of names of the week
var DayNames = React.createClass ({
 render() {
     var oldNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
     var names = [];
     for (var i=0; i<7; i++) {
       names.push(<td key={i}> {oldNames[i]}</td>)
     }
     return (
       <tr>
         {names}
       </tr>
     )
   }
});



// creating blank dayys in rows

var Week = React.createClass ({
 render() {
   var days = [];
   var date  = new Date();
   var endOfCurrentMonth = 30
   var firstDay = new Date(date.getYear(), date.getMonth(), 1);
   var lastDay = new Date(date.getYear(), date.getMonth() + 1, 0);
   var endPreviousMonth = firstDay.setDate(firstDay.getDate() - 1);
   var endPreviousMonth = firstDay.getDate();

   for (var i=0; i<7; i++) {
     var dayCount = (i + 1) + (this.props.week * 7) + (this.props.offset)

      for (var i=0; i< 7; i++) {
      //   var dayCount;
      //   if (i + days[i] <=0 ) {
      //     dayCount = i + 1
      //   }
        var dayCount = (i + 1) + (this.props.week * 7) + (this.props.offset)
        if (dayCount < 1){
          dayCount = endPreviousMonth + dayCount
        }
        else if (dayCount > endOfCurrentMonth) {
          dayCount = dayCount - endOfCurrentMonth
        }
        days.push(<td className="dayBlank" key={i}>{dayCount}</td>)
        }
        return (
          <tr>
            { days }
          </tr>
        )
      }
    }
  });



var Calendar = React.createClass ({
 render() {
   var rows  = [];
   var date  = new Date();
   var monthNames = ['January', 'Febuary', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
   var months = monthNames[date.getMonth()];
   var day   = date.getDate();
   var month = date.getMonth();
   var year  = date.getYear();
   var firstDay = new Date(date.getYear(), date.getMonth(), 1);
   var lastDay = new Date(date.getYear(), date.getMonth() + 1, 0);
   var previousDay = firstDay.setDate(firstDay.getDate() - 1);
   var nextDay = firstDay.setDate(firstDay.getDate() + 1);

// function for showing next onclick next month
// onClickPrevious(){
//
// }
// pushes day names into header row
     rows.push(<DayNames key={"header"} />);
     for (y=0; y<6; y++){

// Changes the rows dynamically
       rows.push(<Week key={y} week={y} offset={-6} />);

    // rows.push(<Day <td key={y} week={y} <td/>)
  }

     return (
       <div>
         {/* <p onClick="" >Next </p> */}
         <h1 className="Current_Month"> { months } </h1>
{/*
         <select className="Dropdown">
           <option value="Jan">Jan</option>
           <option value="Feb">Feb</option>
           <option value="Mar">Mar</option>
           <option value="April">April</option>
           <option value="May">May</option>
           <option value="June">June</option>
           <option value="July">July</option>
           <option value="Aug">Aug</option>
           <option value="Sept">Sept</option>
           <option value="Oct">Oct</option>
           <option value="Nov">Nov</option>
           <option value="Dec">Dec</option>
         </select> */}
         <button className="Previous_button" type="button" value="" onClick= "" >Previous</button>
         <button className="today_button" type="button" value="" onClick="" >Today</button>
         <button className="Next_button" type="button" value="" onClick="" >Next</button>
         <input type="date" />
       <table>
         <tbody>
           { rows }
         </tbody>
       </table>
     </div>
     )
  }
});




//   // ---------------->
//
//   // new stuff
//
//   // Creates table placeholders for the day of the week.
//   var DayNames = React.createClass ({
// render() {
//   return (
//     <tr className="weekDays">
//         <td className="dayBlank">Sun</td>
//         <td className="dayBlank">Mon</td>
//         <td className="dayBlank">Tues</td>
//         <td className="dayBlank">Wed</td>
//         <td className="dayBlank">Thur</td>
//         <td className="dayBlank">Fri</td>
//         <td className="dayBlank">Sat</td>
//     </tr>
//
//   )
// }
// });
//
// var Days = React.createClass ({
// render() {
//   return (
//
//         <tr className="weekDays">
//         <td className="dayBlank"></td>
//         <td className="dayBlank"></td>
//         <td className="dayBlank"></td>
//         <td className="dayBlank"></td>
//         <td className="dayBlank"></td>
//         <td className="dayBlank"></td>
//         <td className="dayBlank"></td>
//       </tr>
//   )
// }
// });
//
//
// var Calendar = React.createClass ({
// render() {
//   var rows = [];
//     rows.push(<DayNames key={"header"} />);
//
//     for (y=0; y<5; y++){
//       rows.push(<Days key={i} />);
//     }
//    //  rows.push(<Days key={"row1"} />);
//    //  rows.push(<Days key={"row2"} />);
//    //  rows.push(<Days key={"row3"} />);
//    //  rows.push(<Days key={"row4"} />);
//
//   return (
//        <table>
//          <tbody>
//            {rows}
//          </tbody>
//        </table>
//
//   )
// }
// });
//
//
