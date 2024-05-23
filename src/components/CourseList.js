import React from "react";
import styled from "styled-components";
import Tabs from "./Tabs";
import { useCoursesContext } from "../context/courses_context";

const CourseList = () => {
  const { courses } = useCoursesContext();

  return (
    <CoursesListWrapper>
      <div className="container">
        <div className="courses-list-top">
          <h2>Широкий выбор курсов</h2>
          <p>
            Выбирайте из более чем 200 курсов от преподавателей Новосибирского
            Государственного Университета Экономики и Управления. Мы стараемся
            обновлять каталог, как можно чаще.
          </p>
        </div>

        <Tabs courses={courses} />
      </div>
    </CoursesListWrapper>
  );
};

const CoursesListWrapper = styled.div`
  padding: 40px 0;
  .courses-list-top p {
    font-size: 1.8rem;
  }
`;

export default CourseList;
