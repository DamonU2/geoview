
# Sidebar

The sidebar to the left of the map shows the available tools.

*Note: The tools shown in the Sidebar vary depending on the map.*

|Symbol|Name|Key Binding|Description|
|----|----|----|----|
![](geosearch/geolocator.svg)| Geolocator | | Click the geolocator icon and an input field for search keywords will appear on the map. |
![](sidebar/basemap.svg)| Basemap| | The basemap selector modifies the underlying basemap to provide a variety of geographical contexts.|
![](sidebar/legend.svg)| Legend | | Legend of map icons|
![](sidebar/details.svg)| Details | | <mark>Details for each layer on the map
![](sidebar/guide.svg)| Guide | | Help guide|
![](sidebar/export.svg)| Export | | Download a PNG file of the map|
![](sidebar/notifications.svg)| Notifications | | Display messages and notifications for the map|
![](sidebar/about.svg)| About Geoview| | Opens a dialog window that provides additional information on the map|


## ![](sidebar/basemap_60.svg) Basemap Selector

The basemap selector modifies the underlying basemap to provide a variety of geographical contexts.

__To open the basemap selector:__

Click on the basemap selector icon.  You will be presented with one or more basemaps to choose from, separated by their projection types. 

## Export Image

You can export an image of the map and its visible layers along with; a legend, title, north arrow with scalebar, custom footnote<sup>*</sup>, and a timestamp<sup>†</sup>.

Select the 'EXPORT' button from the sidebar to get started. A dialog will appear with an image of the map, and an option to enter a map title if desired.

If you'd like to add or remove sections of the exported image such as a legend, click on the options cogwheel in the header. There you'll be able to select/deselect the sections to appear in the exported image.

If you'd like to change the map canvas size you can do so from the dropdown in the header. Select from default to a preset small/medium size, or specify your own size by choosing the 'custom size' option. Note that sizes only affect the map image, the actual exported image may be larger.

Click on the download button in the header to get the final generated map image.

<sup>*</sup>Please note that the footnote may not be available depending on the map. <br/>
<sup>†</sup>Please note timestamp is optional and may not be available depending on the map
Provides additional layer options when the layer panel is open. 


## ![](sidebar/legend_25.svg) Legend

The Legend tab displays the symbology associated with the layers displayed on the map.

Each layer has some symbology associated with it. For simple feature layers a single icon (![](footer/icon_single.png))will be present next to the layer name. 

For complex feature layers (i.e. those with multiple symbols used per layer) the icon will show as a stack (hover to reveal more than one icon ![](footer/icon_multiple.png)) 

The symbology for the layer can be toggled open and closed which is expanded beneath the layer name. WMS layers may optionally have a graphical legend defined, if one is present it will be displayed in the same drop down manner.


##  ![](footer/layers_30.svg) Layers

The Layers tab has the following sub menu options:

![](layers/view.png)

-   View (default)
-   Add
-   Sort
-   Remove


### ![](footer/view_25.svg) View

The View sub menu option under the Layers tab consists of 2 sections.  The left section lists all the layers displayed on the map.  Click on a layer and the right section lists the layer settings (available options for that layer).

![](footer/footer.png)

### Layer Icons

Each layer has some symbology associated with it. For simple feature layers a single icon (![](footer/icon_single.png))will be present next to the layer name. For complex feature layers (i.e. those with multiple symbols used per layer) the icon will show as a stack (hover to reveal more than one icon ![](footer/icon_multiple.png)).

### Group layers
The group layer icon (![](layers/group.svg)) denotes a group of layers.  Click on the group layer to expand the list of sub layers.  Sub layers may also be group layers.

![](layers/group.png)

### Layer Visibility

Select the eye icon, next to each layer, to toggle visibililty on ![](footer/eye.png) or off ![](footer/eye_not_visible.png).

For layers that are always displayed, the visibility (eye) icon is disabled (greyed out) ![](footer/eye_disabled.png). 

### Layer Types

Layers can either be in raster format or vector format.  The following two tables describe the types of layers for each format.

#### Raster format layers (six types):

|Layer Type|Interactive|Layer Format|Datatable support|Notes|
|----|----|----|----|----|
| ESRI Dynamic | Yes | Raster | Yes | Good choice for large, complex geometry that would be slow to render locally |
| ESRI Image | No | Raster | No | Raster and image file support |
| XYZ Tile | No | Raster | No | Fast, efficient - server contains pre-rendered map tiles |
| WMS | Yes | Raster | No | Georeferenced map images which server generates using data from a GIS database |
| Static Image| No | Raster | No |  |
| Vector tiles layer| Yes | Raster | Yes |  |

#### Vector format layers (six types):

|Layer Type|Interactive|Layer Format|Datatable support|Notes|
|----|----|----|----|----|
| ESRI Feature | Yes | Vector | Yes | Fast, efficient - local rendering for small to medium size geometry sets |
| GeoJSON | Yes | Vector | Yes |  |
| OGC Feature API Layer | Yes| Vector| Yes | |
| GeoPackage | Yes | Vector | Yes |  |
| CSV | Yes | Vector | Yes |  |
| WFS | Yes | Vector | Yes | Fast, efficient - local rendering for small to medium size geometry sets |

Note that if a layer fails to load correctly it will be identified by an error notice in the notifications tool on the Sidebar. Instead of the standard layer actions you can select to either reload the layer (this is particularly helpful if there is a temporary network connectivity issue) or remove the layer. If a layer is removed it will be taken out of the layer selector completely.

## Layer Settings

Click a layer in the left section of the layers view tab, and the layer settings are displayed in right section.

*Note that some settings may not be available depending on various factors such as layer type or configuration.*

![](layers/settings.png)

|Symbol|Name|Description|
|----|----|----|
| ![](layers/table_view_60.svg) | Table details | Opens simplified view of Data Table. |
| ![](layers/refresh_60.svg) | Refresh | Reloads the layer |
| ![](layers/highlight_60.svg) | Highlight | Brings layer to the top, decreases opacity of other layers and displays layer boundary. |
| ![](layers/zoom_60.svg) | Zoom to layer boundary | Pans and zooms the map so that the layer boundary is in view |
| ![](layers/opacity.png) | Opacity | Slider to increase/decrease layer opacity |

### Layer Features

Features for the layer are listed in the layers settings. Select  the checkbox (![](layers/check.png)) next to the feature to toggle visibiity for the feature.  

The number of features visible is displayed under the layer name.

## ![](layers/add_25.svg) Add

Additional layers can be added to the map viewer.  Click the Add tab in the Layers submenu.

![](layers/add_layer.png)

Usage:
- If you wish to add a file, you can do so by dragging the file over the import wizard, by clicking on the `Choose a File` button and selecting the file, or by providing the URL to the file.
- If you wish to add a service, you can do so by entering the service URL into the text box.
- Click the 'Continue' button to proceed.
- Ensure the the correct file or service type is selected from the dropdown menu. If the wrong type is selected, an error will be displayed prompting you to try a different type.
- Click the 'Continue' button to proceed. The file type (eg. CSV) may be displayed.
- Depending on the type of dataset being loaded, various parameters can be set in this final phase.
- Click the 'Continue' button to insert the layer into the map and closes the Add Layer menu.

### ![](layers/sort_25.svg) Sort

To sort the layers you can simply drag and drop each layer panel.

If you using the keyboard for sorting layers, note the following;

-   When the layer panel has focus use the spacebar to lift the panel. This will start the drag.
-   Once the drag has started you can use the up and down arrows to move the panel
-   You can use the spacebar to drop the panel.
-   Use the ESC key to cancel drag

### ![](layers/remove_25.svg) Remove


To remove a layer, click on the delete icon (![](layers/remove_25.svg)) to the right of the layer.

## ![](sidebar/details_30.svg) Details

The Details tab has two sections.  The available layers for the map are listed in the left section, and the feature details for each layer are displayed in the right section. 

*__Note a feature on the map must be selected to enable the layer in the list. Otherwise layers are disabled (greyed out).__*

![](footer/details.png)

CLick on a layer to see its feature details.

The number of features for the selected layer is shown in the upper left of the details section.  

Use the left and right arrows in the upper right of the details section, to browse through the features for selected layer.

The zoom icon will zoom the map to the selected feature. 

Check the highlight box to keep the feature highlighted on the map.



