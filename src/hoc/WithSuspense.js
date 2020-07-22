import React, {Component, Suspense} from "react";
import Preloader from "../Components/Common/Preloader/Preloader";

export const WithSuspense = (Component) => {
    return (props) => {
        return (
            <Suspense fallback={<Preloader/>}>
                <Component {...props}/>
            </Suspense>
        )
    }
}