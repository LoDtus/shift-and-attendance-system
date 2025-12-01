import '../../styles/custom-ckeditor-style.css';
import '../../styles/ckeditor-style.css';
import 'ckeditor5/ckeditor5.css';
import { DecoupledEditor, Alignment, AutoImage, AutoLink, Autosave, Base64UploadAdapter, BlockQuote, Bold, Code, CodeBlock, Essentials, FindAndReplace, FontBackgroundColor, FontColor, FontFamily, FontSize, GeneralHtmlSupport, Heading, Highlight, ImageBlock, ImageCaption, ImageEditing, ImageInline, ImageInsert, ImageInsertViaUrl, ImageResize, ImageStyle, ImageTextAlternative, ImageToolbar, ImageUpload, ImageUtils, Indent, IndentBlock, Italic, Link, LinkImage, List, ListProperties, MediaEmbed, Minimap, Paragraph, PasteFromOffice, RemoveFormat, SpecialCharacters, SpecialCharactersArrows, SpecialCharactersCurrency, SpecialCharactersEssentials, SpecialCharactersLatin, SpecialCharactersMathematical, SpecialCharactersText, Strikethrough, Subscript, Superscript, Table, TableCaption, TableCellProperties, TableColumnResize, TableProperties, TableToolbar, TextPartLanguage, Title, TodoList, Underline } from "ckeditor5";
import { useState, useEffect, useRef, useMemo } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import { useDispatch, useSelector } from 'react-redux';
import { getEditorConfig } from './ckeditorConfig';
// import { setTitle, setContent } from '@/redux/slices/guidelineSlice';

export default function CustomEditor() {
    const editorContainerRef = useRef<any>(null);
    const editorMenuBarRef = useRef<any>(null);
    const editorToolbarRef = useRef<any>(null);
    const editorRef = useRef<any>(null);
    const editorMinimapRef = useRef<any>(null);
    const containerRef = useRef<any>(null); 

    const [isLayoutReady, setIsLayoutReady] = useState(false);
    const firstRender = useRef(false);

    const dispatch = useDispatch();
    // const title = useSelector((state: any) => state.guideline.title);
    // const excerpt = useSelector((state: any) => state.guideline.excerpt);
    // const content = useSelector((state: any) => state.guideline.content);
    
    const { editorConfig } = useMemo(() => {
        if (!isLayoutReady) {
            return {};
        }
        return {
            editorConfig: getEditorConfig(editorMinimapRef),
        };
    }, [isLayoutReady]);

    useEffect(() => {
        setIsLayoutReady(true);

        return () => {
            // editorRef.current.setData('');
            setIsLayoutReady(false);
        };
    }, []);

    return (
        <div className="main-container w-full">
            <div
                ref={editorContainerRef}
                className="editor-container editor-container_document-editor editor-container_include-minimap
                    border-0! flex"
            >
                <div className='ml-1'>
                    <div className='sticky top-0 z-10 px-1 pb-1 mb-1 border border-gray-border bg-white'>
                        <div ref={editorMenuBarRef}
                            className="editor-container__menu-bar"
                        ></div>
                        <div ref={editorToolbarRef}
                            className="editor-container__toolbar
                                border-x border-gray-border"
                        ></div>
                    </div>
                    <div className="editor-container__minimap-wrapper">
                        <div className="editor-container__sidebar editor-container__sidebar_minimap
                            mr-1! border border-gray-border">
                            <div ref={editorMinimapRef}></div>
                        </div>
                        <div className='flex flex-col'>
                            <input
                                type='text'
                                className='mb-1 p-3 bg-white border border-gray-border outline-0'
                                placeholder='Nhập tiêu đề bài viết'
                                // value={title}
                                // onChange={(e) => dispatch(setTitle(e.target.value))}
                            />
                            <div ref={containerRef}
                                className="editor-container__editor-wrapper
                                border border-gray-border">
                                <div className="editor-container__editor">
                                    { isLayoutReady && (
                                        <CKEditor
                                            ref={editorRef}
                                            onReady={editor => {
                                                editorRef.current = editor;
                                                editorToolbarRef.current.appendChild(editor.ui.view.toolbar.element);
                                                editorMenuBarRef.current.appendChild(editor.ui.view.menuBarView.element);

                                                // if ((excerpt || content)  && !firstRender.current) {
                                                //     const fullData = `<h1>${excerpt || ''}</h1>${content || ''}`;
                                                //     editor.setData(fullData);
                                                //     firstRender.current = true;
                                                // }
                                            }}
                                            onAfterDestroy={() => {
                                                editorRef.current = null;
                                                if (editorToolbarRef.current) Array.from(editorToolbarRef.current.children).forEach(child => child.remove());
                                                if (editorMenuBarRef.current) Array.from(editorMenuBarRef.current.children).forEach(child => child.remove());
                                            }}
                                            editor={DecoupledEditor}
                                            config={editorConfig}
                                            data={''}
                                            // onChange={(event, editor) => dispatch(setContent(editor.getData()))}
                                        />
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};