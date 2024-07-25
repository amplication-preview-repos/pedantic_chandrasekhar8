import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { HealthcareProviderList } from "./healthcareProvider/HealthcareProviderList";
import { HealthcareProviderCreate } from "./healthcareProvider/HealthcareProviderCreate";
import { HealthcareProviderEdit } from "./healthcareProvider/HealthcareProviderEdit";
import { HealthcareProviderShow } from "./healthcareProvider/HealthcareProviderShow";
import { PatientList } from "./patient/PatientList";
import { PatientCreate } from "./patient/PatientCreate";
import { PatientEdit } from "./patient/PatientEdit";
import { PatientShow } from "./patient/PatientShow";
import { BookingList } from "./booking/BookingList";
import { BookingCreate } from "./booking/BookingCreate";
import { BookingEdit } from "./booking/BookingEdit";
import { BookingShow } from "./booking/BookingShow";
import { DialysisCenterList } from "./dialysisCenter/DialysisCenterList";
import { DialysisCenterCreate } from "./dialysisCenter/DialysisCenterCreate";
import { DialysisCenterEdit } from "./dialysisCenter/DialysisCenterEdit";
import { DialysisCenterShow } from "./dialysisCenter/DialysisCenterShow";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { httpAuthProvider } from "./auth-provider/ra-auth-http";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"DialysisCenterReservation"}
        dataProvider={dataProvider}
        authProvider={httpAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="HealthcareProvider"
          list={HealthcareProviderList}
          edit={HealthcareProviderEdit}
          create={HealthcareProviderCreate}
          show={HealthcareProviderShow}
        />
        <Resource
          name="Patient"
          list={PatientList}
          edit={PatientEdit}
          create={PatientCreate}
          show={PatientShow}
        />
        <Resource
          name="Booking"
          list={BookingList}
          edit={BookingEdit}
          create={BookingCreate}
          show={BookingShow}
        />
        <Resource
          name="DialysisCenter"
          list={DialysisCenterList}
          edit={DialysisCenterEdit}
          create={DialysisCenterCreate}
          show={DialysisCenterShow}
        />
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
      </Admin>
    </div>
  );
};

export default App;
