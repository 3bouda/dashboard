import {FormStyle,getLocaleDayNames,getLocaleEraNames,getLocaleFirstDayOfWeek,getLocaleMonthNames,TranslationWidth}
  from '@angular/common';
import { Component, Inject, LOCALE_ID, OnInit } from '@angular/core';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})

export class CalendarComponent implements OnInit{
  ngOnInit(): void {
    console.log(this.days[0])
  }
  constructor(@Inject(LOCALE_ID) public locale: string,){}
  todayNumber: number = Date.now();
  todayDate : Date = new Date();
  todayMonth = new Date().getMonth();
  nextMonth = new Date().setMonth(this.todayMonth+1);
  previousMonth = new Date().setMonth(this.todayMonth-1);

  todayYear = new Date().getFullYear();
  firstDayMonth:string = (new Date(this.todayDate.getFullYear(),this.todayDate.getMonth(),1)).toDateString()
  lastDayMonth = new Date(this.todayDate.getFullYear(),this.todayDate.getMonth()+1,0);

  year= getLocaleMonthNames(this.locale,FormStyle.Standalone,TranslationWidth.Abbreviated);
  days= getLocaleDayNames(this.locale,FormStyle.Standalone,TranslationWidth.Abbreviated);

  calendarMonthList:string[][]=[];
  fillCalendar(){
    //this.calendarMonthList.push([this.days])
  }

}
