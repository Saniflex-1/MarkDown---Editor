import { useState, useEffect, ChangeEvent } from "react";
import styled from "styled-components";
import Navbar from "./ui/Navbar";
import Sidebar from "./ui/Sidebar";
import Markdown from "./features/Markdown";
import { formatDate, generateUniqueId } from "./utils/helper";
import Preview from "./features/Preview";
import { DarkModeProvider } from "./Context/DarkModeContext";
import GlobalStyles from "./Styles/GlobalStyles";
import DeleteModal from "./ui/DeleteModal";
import toast, { Toaster } from "react-hot-toast";

