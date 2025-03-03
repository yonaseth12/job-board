import { Navigate, RouteObject } from "react-router-dom";
import { RootLayout } from "@/layouts/RootLayout";


export const routes: RouteObject[] = [
    {
        path: "/",
        element: <RootLayout />,
        children: [
            {
                errorElement: <ErrorPage />,
                children: [
                    {
                        index: true,
                        element: <Navigate to="/tasks" replace />,
                    },
                    {
                        path: "tasks",
                        children: [
                            { index: true, element: <TaskListPage /> },
                            { path: "new", element: <NewTaskPage /> },
                        ],
                    },
                    { path: "*", element: <NotFoundPage /> },
                ]
            }
        ]
    }
]