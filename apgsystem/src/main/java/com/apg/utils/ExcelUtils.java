package com.apg.utils;

import org.apache.poi.ss.usermodel.*;

public class ExcelUtils {

    public static CellStyle createCenterAlignedStyle(Workbook workbook) {
        CellStyle style = workbook.createCellStyle();
        style.setAlignment(HorizontalAlignment.CENTER);
        style.setVerticalAlignment(VerticalAlignment.CENTER);
        return style;
    }

    public static CellStyle createLeftAlignedStyle(Workbook workbook) {
        CellStyle style = workbook.createCellStyle();
        style.setAlignment(HorizontalAlignment.LEFT);
        style.setVerticalAlignment(VerticalAlignment.CENTER);
        return style;
    }

    public static CellStyle setRedWordingStyle(Workbook workbook, CellStyle cellStyle) {
        Font font = workbook.createFont();
        font.setColor(IndexedColors.RED.getIndex());
        cellStyle.setVerticalAlignment(VerticalAlignment.CENTER);
        cellStyle.setFont(font);
        return cellStyle;
    }

    public static CellStyle setBlackWordingStyle(Workbook workbook, CellStyle cellStyle) {
        Font font = workbook.createFont();
        font.setColor(IndexedColors.BLACK.getIndex());
        cellStyle.setVerticalAlignment(VerticalAlignment.CENTER);
        cellStyle.setFont(font);
        return cellStyle;
    }

    public static CellStyle createAllBorderStyle(Workbook workbook) {
        CellStyle style = workbook.createCellStyle();
        style.setBorderTop(BorderStyle.THIN);
        style.setBorderBottom(BorderStyle.THIN);
        style.setBorderLeft(BorderStyle.THIN);
        style.setBorderRight(BorderStyle.THIN);
        return style;
    }

    public static CellStyle createCenterAlignedStyleWithColor(Workbook workbook, IndexedColors color) {
        CellStyle style = createCenterAlignedStyle(workbook);
        style.setFillForegroundColor(color.getIndex());
        style.setFillPattern(FillPatternType.SOLID_FOREGROUND);
        return style;
    }
    public static CellStyle createLeftAlignedStyleWithColor(Workbook workbook, IndexedColors color) {
        CellStyle style = createLeftAlignedStyle(workbook);
        style.setFillForegroundColor(color.getIndex());
        style.setFillPattern(FillPatternType.SOLID_FOREGROUND);
        return style;
    }

    public static CellStyle createCenterAlignedStyleWithColorAndLeftBorder(Workbook workbook, IndexedColors color) {
        CellStyle style = createCenterAlignedStyle(workbook);
        style.setFillForegroundColor(color.getIndex());
        style.setFillPattern(FillPatternType.SOLID_FOREGROUND);
        style.setBorderLeft(BorderStyle.THIN);
        return style;
    }

    public static CellStyle createCenterAlignedStyleWithColorAndRightBorder(Workbook workbook, IndexedColors color) {
        CellStyle style = createCenterAlignedStyle(workbook);
        style.setFillForegroundColor(color.getIndex());
        style.setFillPattern(FillPatternType.SOLID_FOREGROUND);
        style.setBorderRight(BorderStyle.THIN);
        return style;
    }

    public static CellStyle createCenterAlignedStyleWithColorAndBottomBorder(Workbook workbook, IndexedColors color) {
        CellStyle style = createCenterAlignedStyle(workbook);
        style.setFillForegroundColor(color.getIndex());
        style.setFillPattern(FillPatternType.SOLID_FOREGROUND);
        style.setBorderBottom(BorderStyle.THIN);
        return style;
    }

    public static CellStyle createLeftAlignedStyleWithColorAndBottomBorder(Workbook workbook, IndexedColors color) {
        CellStyle style = createLeftAlignedStyle(workbook);
        style.setFillForegroundColor(color.getIndex());
        style.setFillPattern(FillPatternType.SOLID_FOREGROUND);
        style.setBorderBottom(BorderStyle.THIN);
        return style;
    }

    public static CellStyle createCenterAlignedStyleWithColorAndRightBottomBorder(Workbook workbook, IndexedColors color) {
        CellStyle style = createCenterAlignedStyle(workbook);
        style.setFillForegroundColor(color.getIndex());
        style.setFillPattern(FillPatternType.SOLID_FOREGROUND);
        style.setBorderRight(BorderStyle.THIN);
        style.setBorderBottom(BorderStyle.THIN);
        return style;
    }

    public static CellStyle createCenterAlignedStyleWithColorAndLeftBottomBorder(Workbook workbook, IndexedColors color) {
        CellStyle style = createCenterAlignedStyle(workbook);
        style.setFillForegroundColor(color.getIndex());
        style.setFillPattern(FillPatternType.SOLID_FOREGROUND);
        style.setBorderLeft(BorderStyle.THIN);
        style.setBorderBottom(BorderStyle.THIN);
        return style;
    }

    public static CellStyle createCombinedStyle(Workbook workbook, HorizontalAlignment hAlign, VerticalAlignment vAlign, IndexedColors color) {
        CellStyle style = workbook.createCellStyle();
        style.setAlignment(hAlign);
        style.setVerticalAlignment(vAlign);
        style.setFillForegroundColor(color.getIndex());
        style.setFillPattern(FillPatternType.SOLID_FOREGROUND);
        style.setBorderTop(BorderStyle.THIN);
        style.setBorderBottom(BorderStyle.THIN);
        style.setBorderLeft(BorderStyle.THIN);
        style.setBorderRight(BorderStyle.THIN);
        return style;
    }

    public static CellStyle createCombinedStyle(Workbook workbook, HorizontalAlignment hAlign, VerticalAlignment vAlign, Short colorIndex) {
        CellStyle style = workbook.createCellStyle();
        style.setAlignment(hAlign);
        style.setVerticalAlignment(vAlign);
        style.setFillForegroundColor(colorIndex);
        style.setFillPattern(FillPatternType.SOLID_FOREGROUND);
        style.setBorderTop(BorderStyle.THIN);
        style.setBorderBottom(BorderStyle.THIN);
        style.setBorderLeft(BorderStyle.THIN);
        style.setBorderRight(BorderStyle.THIN);
        return style;
    }

}

