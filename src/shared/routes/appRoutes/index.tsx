import { lazy, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import Spinner from '../../ui/Spinner'
import { RouteEnum } from '../RouteEnum/routeEnum.ts'

const StartPage = lazy(() => import('../../../pages/Start'))
const OnBoardingPage = lazy(() => import('../../../pages/OnBoarding'))
const PresentsPage = lazy(() => import('../../../pages/Presents'))
const QuizPage = lazy(() => import('../../../pages/Quiz'))
const FinalPage = lazy(() => import('../../../pages/Final'))
const EntryPage = lazy(() => import('../../../pages/Entry'))

const AppRoutes = () => {
  return (
    <Suspense fallback={<Spinner />}>
      <Routes>
        <Route
          index
          element={<EntryPage />}
        />
        <Route
          index
          element={<StartPage />}
          path={RouteEnum.START}
        />
        <Route
          index
          element={<OnBoardingPage />}
          path={RouteEnum.ONBOARDING}
        />
        <Route
          index
          element={<PresentsPage />}
          path={RouteEnum.PRESENTS}
        />
        <Route
          index
          element={<QuizPage />}
          path={RouteEnum.QUIZ}
        />
        <Route
          index
          element={<FinalPage />}
          path={RouteEnum.FINAL}
        />
      </Routes>
    </Suspense>
  )
}

export default AppRoutes
