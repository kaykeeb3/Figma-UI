import { NodeResizer } from "@reactflow/node-resizer";
import { NodeProps, Handle, Position } from "reactflow";

import '@reactflow/node-resizer/dist/style.css'

export function Square( {selected}: NodeProps) {
  return (
    <div className="bg-violet-500 rounded min-w-[200px] min-h-[200px]">
      <NodeResizer 
        minWidth={200}
        minHeight={200}
        isVisible={selected}
        lineClassName=""
        handleClassName=""

      />
      <Handle 
        id="right"  
        type="source" 
        position={Position.Right}
        className="-right-5 w-3 h-3 bg-blue-400/80"
      />
      <Handle 
        id="left" 
        type="source" 
        position={Position.Left}
        className="-left-5 w-3 h-3 bg-blue-400/80"
      />
      <Handle 
        id="top"  
        type="source" 
        position={Position.Top}
        className="-top-5 w-3 h-3 bg-blue-400/80"
      />
      <Handle 
        id="bottom" 
        type="source" 
        position={Position.Bottom}
        className="-bottom-5 w-3 h-3 bg-blue-400/80"
      />
    </div>
  )
}